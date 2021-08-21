const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query, { variables } = {}) {
  const headers = { "Content-Type": "application/json" };

  //   TODO setup auth di wordpress biar bisa pake ini VVVV

  //   if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
  //     headers[
  //       "Authorization"
  //     ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  //   }

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getHomepagePreviews() {
  const articlesPromise = fetchAPI(
    `
    query MyQuery {
        posts(where: {categoryName: "Artikel"}, first: 4) {
            edges {
            node {
                title
                slug
                featuredImage {
                node {
                    mediaItemUrl
                }
                }
                date
            }
            }
        }
        }`
  );

  const annoucementsPromise = fetchAPI(
    `
    query MyQuery {
        posts(where: {categoryName: "Pengumuman"}, first: 4) {
            edges {
            node {
                title
                slug
                featuredImage {
                node {
                    mediaItemUrl
                }
                }
                date
            }
            }
        }
        }`
  );

  const [articlesRes, announcementsRes] = await Promise.all([
    articlesPromise,
    annoucementsPromise,
  ]);
  return [
    articlesRes.posts.edges.map((edge) => edge.node),
    announcementsRes.posts.edges.map((edge) => edge.node),
  ];
}

export async function getArticlePaths() {
  const resData = await fetchAPI(
    `
      query getAllPosts {
          posts {
            nodes {
              date
              content
              title
              slug
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
    `
  )
  
  const posts = resData.posts.nodes
  const paths = posts.map((post) => ({
    params: { slug: post.slug }
  }))

  return paths
}

export async function getOnePageContent(context){
  const resData = await fetchAPI (
    `
      query getMainContent ($id: ID!, $idType: PostIdType!) {
        post(id: $id, idType: $idType) {
          date
          id
          slug
          content
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
          mediaEmbed {
            mediaSource
            mediaUrl
          }
        }
      }
    `,
    {
      variables: {
        id: context.params.slug,
        idType: 'SLUG'
      }
    } 
  )

  let oembed = null;
  if (resData.post.mediaEmbed.mediaUrl){
    if ( resData.post.mediaEmbed.mediaSource.toLowerCase() === 'youtube'){
      oembed = await fetch(`https://youtube.com/oembed?url=${resData.post.mediaEmbed.mediaUrl}`)
    } else if (resData.post.mediaEmbed.mediaSource.toLowerCase() === 'spotify'){
      oembed = await fetch(`https://embed.spotify.com/oembed/?url=${resData.post.mediaEmbed.mediaUrl}`)
    }

    oembed = await oembed.json()
  }
  return  { post: resData.post, oembedJSON: oembed }

}

            
    

export async function getPostsLink(){
  const resData = await fetchAPI(
    `
    query getPostsLink {
      posts {
        nodes {
          date
          slug
          title
          categories {
            nodes {
              name
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
    `
  )
  return { posts: resData.posts }
}

export async function getStaffs() {
  const doctorPromise = fetchAPI(
    `
    query MyQuery {
      posts(where: {categoryName: "Dokter"}) {
        nodes {
          title
          content
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
    `
  );

  const paramedisPromise = fetchAPI(
    `
    query MyQuery {
      posts(where: {categoryName: "Paramedis"}) {
        nodes {
          title
          content
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
    `
  );

  const [doctorRes, paramedisRes] = await Promise.all([
    doctorPromise,
    paramedisPromise,
  ]);

  return {
    doctors: doctorRes.posts.nodes.map((node) => {
      let match = node.content.match(/<p>(.*?)<\/p>/);
      return { ...node, content: match ? match[1] : "" };
    }),
    paramedics: paramedisRes.posts.nodes.map((node) => {
      let match = node.content.match(/<p>(.*?)<\/p>/);
      return { ...node, content: match ? match[1] : "" };
    }),
  };
}
