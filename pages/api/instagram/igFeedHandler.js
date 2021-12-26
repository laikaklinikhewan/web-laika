const token = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

export async function igFeedHandler() {
  const res = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,username&access_token=${token}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );

  let json = res
    .json()
    .then((obj) => {
      return obj.data;
    })
    .catch((err) => console.error(err));

  return json;
}
