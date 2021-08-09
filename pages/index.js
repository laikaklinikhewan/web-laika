
import MainNavbar from '../components/MainNavbar'
import PinkNavbar from '../components/PinkNavbar'
import IndexHero from "../components/IndexHero";
import InfoKlinik from "../components/InfoKlinik";
import JamPraktek from "../components/JamPraktek";
import HomeArticles from "../components/HomeArticles";
import Footer from "../components/Footer";
import Staff from '../components/Staff';

export default function Home() {
  const dummyLinks = [
    { text: "Dokter", linkUrl: "/dokter" },
    { text: "Paramedis", linkUrl: "/paramedis" }
  ];
  return (
    <>
      {/* <MainNavbar/> */}
      {/* <PinkNavbar listButton={dummyLinks}/> */}
      {/* <IndexHero /> */}
      {/* <InfoKlinik /> */}
      {/* <JamPraktek /> */}
      {/* <HomeArticles /> */}
      <Staff/>
      {/* <Footer /> */}
    </>
  )
}
