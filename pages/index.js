import MainNavbar from "../components/MainNavbar";
import IndexHero from "../components/IndexHero";
import InfoKlinik from "../components/InfoKlinik";
import JamPraktek from "../components/JamPraktek";
import HomeArticles from "../components/HomeArticles";
import Footer from "../components/Footer";
import { getHomepagePreviews } from "../lib/wordpress";
import Head from "next/head";

export default function Home({ articles, announcements }) {
  return (
    <>
      <Head>
        <title>Laika | Klinik Hewan & Petshop</title>
        <link rel="icon" href="/assets/LOGO.webp" />
      </Head>
      <MainNavbar />
      <IndexHero />
      <InfoKlinik />
      <JamPraktek />
      <HomeArticles articles={articles} announcements={announcements} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  let [articles, announcements] = await getHomepagePreviews();
  return {
    props: { articles, announcements },
  };
}
