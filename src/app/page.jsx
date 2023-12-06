import styles from './page.module.css'
import ImageSlider from '@/components/ImageSlider/ImageSlider'
import CardPair from '@/components/CardPair/CardPair'
import Sponsors from '@/components/Sponsors/Sponsors'
import BrandSlider from '@/components/Slider/BrandSlider'
import NewRevenues from '@/components/NewRevenues/NewRevenues'
import Video from '@/components/Video/Video'
import ContactForm from '@/components/ContacForm/ContactForm'
import PopUp from '@/components/PopUp/PopUp'


export default function Home() {

  
  return (
    <div className={styles.container}>
    <div className={styles.item}>
      {/* <h1 className={styles.title}>este es el home</h1> */}
      <ImageSlider/>
      <CardPair/>
      <Video/>
      {/* <BrandSlider/> */}
      <Sponsors/>
      <NewRevenues/>
      <ContactForm/>
      {/* <PopUp/> */}
   </div>

  </div>
  )
}
