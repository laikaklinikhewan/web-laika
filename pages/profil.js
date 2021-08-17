import StoreProfile from "../components/StoreProfile";
import Footer from "../components/Footer";
import Head from 'next/head'

export default function Profile() {
  return (
    <>
      <Head>
        <title>Profil Klinik</title>
        <link rel="icon" href="/assets/LOGO.webp" />
      </Head>
      <StoreProfile />
      <Footer />
    </>
  );
}
