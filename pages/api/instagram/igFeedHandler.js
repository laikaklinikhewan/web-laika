const token = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

export async function igFeedHandler() {
  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,media_url,permalink&access_token=${token}`
    );
    const json = await res.json();
    return json.data;
  } catch (err) {
    console.error(err.message)
  }
}
