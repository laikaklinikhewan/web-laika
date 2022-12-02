import MainNavbar from "../components/MainNavbar";
import IndexHero from "../components/IndexHero";
import InfoKlinik from "../components/InfoKlinik";
import JamPraktek from "../components/JamPraktek";
import HomeArticles from "../components/HomeArticles";
import Footer from "../components/Footer";
import { igFeedHandler } from "./api/instagram/igFeedHandler";
import Head from "next/head";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Laika | Klinik Hewan & Petshop</title>
        <link rel="icon" href="/assets/LOGO.webp" />
      </Head>
      <MainNavbar />
      <section name="0">
        <IndexHero />
      </section>
      <section name="1">
        <InfoKlinik />
      </section>
      <section name="2">
        <JamPraktek />
      </section>
      <section name="3">
        <HomeArticles articles={articles} />
      </section>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  let articles = await igFeedHandler();
  let shownArticles = [];
  for (let line = 0; line < 2; line++) {
    let lineitems = [];
    for (let idxitem = 0 + line * 4; idxitem < 4 + line * 4; idxitem++) {
      lineitems.push(articles[idxitem]);
    }
    shownArticles.push(lineitems);
  }
  return {
    props: { articles: shownArticles },
  };
}
