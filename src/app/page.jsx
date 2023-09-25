
import Navbar from '@/components/NavBar/NavBar'
import styles from './page.module.css'
import ImageSlider from '@/components/ImageSlider/ImageSlider'
import CardPair from '@/components/CardPair/CardPair'
import Sponsors from '@/components/Sponsors/Sponsors'
import NewRevenues from '@/components/NewRevenues/NewRevenues'


export default function Home() {

  
  return (
    <div className={styles.container}>
    <div className={styles.item}>
      {/* <h1 className={styles.title}>este es el home</h1> */}
      <ImageSlider/>
      <CardPair/>
      <Sponsors/>
      <NewRevenues/>
   </div>

  </div>
  )
}
