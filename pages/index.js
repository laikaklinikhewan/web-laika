
import MainNavbar from '../components/MainNavbar'
import PinkNavbar from '../components/PinkNavbar'
import styles from '../styles/Home.module.css'
import IndexHero from "../components/IndexHero";
import InfoKlinik from "../components/InfoKlinik";
import JamPraktek from "../components/JamPraktek";
import HomeArticles from "../components/HomeArticles";
import Footer from "../components/Footer";

export default function Home() {
  const dummyLinks = [
    { text: "Dokter", linkUrl: "/dokter" },
    { text: "Paramedis", linkUrl: "/paramedis" }
  ];
  return (
    <div className={styles.container}>
      <MainNavbar/>
      <PinkNavbar listButton={dummyLinks}/>
      <IndexHero />
      <InfoKlinik />
      <JamPraktek />
      <HomeArticles />
      <Footer />
    </div>
  )
}
