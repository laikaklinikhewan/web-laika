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
