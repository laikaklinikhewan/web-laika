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
  const data = await fetchAPI(
    `
    query ArticlePreviews {
      articles: posts(first: 4, where: {categoryName: "Artikel"}) {
        nodes {
          ...previewData
        }
      }
        announcements: posts(first: 4, where: {categoryName: "Pengumuman"}) {
        nodes {
          ...previewData
        }
      }
    }
    
    fragment previewData on Post {
      title
      slug
      date
      featuredImage {
        node {
          mediaItemUrl
        }
      }
    }
    `
  );

  return [data.articles.nodes, data.announcements.nodes];
}

export async function getArticlePaths() {
  let hasNext = true;
  let lastFetchedCursor = "";
  let allPosts = [];

  while (hasNext) {
    let data = await fetchAPI(
      `
      query getSlugs($lastFetchedCursor: String) {
        posts(first: 20, after: $lastFetchedCursor, where: {categoryIn: [2, 3]}) {
          nodes {
            slug
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }`,
      {
        variables: { lastFetchedCursor },
      }
    );

    allPosts.push(...data.posts.nodes);
    lastFetchedCursor = data.posts.pageInfo.endCursor;
    hasNext = data.posts.pageInfo.hasNextPage;
  }

  const paths = allPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return paths;
}

export async function getOnePageContent(context) {
  const resData = await fetchAPI(
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
          keyword {
            keywords
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
  let oembedJSON = null;
  if (resData.post.mediaEmbed.mediaUrl){
    if ( resData.post.mediaEmbed.mediaSource.toLowerCase() === 'youtube'){
      oembed = await fetch(`https://youtube.com/oembed?url=${resData.post.mediaEmbed.mediaUrl}`)
      oembedJSON = await oembed.json()
    } else if (resData.post.mediaEmbed.mediaSource.toLowerCase() === 'spotify'){
      oembed = await fetch(`https://embed.spotify.com/oembed/?url=${resData.post.mediaEmbed.mediaUrl}`)
    }
  }
  return  { post: resData.post, oembedJSON: oembedJSON }

}

export async function getPostsLink() {
  let hasNext = true;
  let lastFetchedCursor = "";
  let allPosts = [];

  while (hasNext) {
    const data = await fetchAPI(
      `
    query getPostsLink($lastFetchedCursor: String) {
      posts(first: 20, after: $lastFetchedCursor, where: {categoryIn: [2, 3]}) {
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
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
    `,
      { variables: { lastFetchedCursor } }
    );

    allPosts.push(...data.posts.nodes);
    lastFetchedCursor = data.posts.pageInfo.endCursor;
    hasNext = data.posts.pageInfo.hasNextPage;
  }

  return allPosts;
}

export async function getStaffs() {
  const data = await fetchAPI(
    `
    query getStaffs {
      doctors: posts(first: 20, where: {categoryName: "Dokter"}) {
        nodes {
          ...staffInfo
        }
      }
      paramedics: posts(first: 20, where: {categoryName: "Paramedis"}) {
        nodes {
          ...staffInfo
        }
      }
    }
    
    fragment staffInfo on Post {
      title
      content
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      practice {
        practice
      }
    }
    `
  );

  return {
    doctors: data.doctors.nodes.map((node) => {
      let match = node.content.match(/<p>(.*?)<\/p>/);
      return { ...node, content: match ? match[1] : "" };
    }),
    paramedics: data.paramedics.nodes.map((node) => {
      let match = node.content.match(/<p>(.*?)<\/p>/);
      return { ...node, content: match ? match[1] : "" };
    }),
  };
}
