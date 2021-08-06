import MainNavbar from '../components/MainNavbar'
import PinkNavbar from '../components/PinkNavbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  const dummyLinks = [
    { text: "Dokter", linkUrl: "/dokter" },
    { text: "Paramedis", linkUrl: "/paramedis" }
  ];
  return (
    <div className={styles.container}>
      <MainNavbar/>
      <PinkNavbar listButton={dummyLinks}/>
    </div>
  )
}
