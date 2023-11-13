import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}> 
      
        <div className={styles.info}>
          <div className={styles.logo}>
            <Image src = '/LOGO_AUTOBAIRES_04.png' alt='autobaires' width={140} height={140} className={styles.image}/>
          </div>
          {/* </div> */}
        </div>

        <div className={styles.links}>
          <div className={styles.list}>
            {/* <span className={styles.listTitle}>Links</span> */}
            <Link href='/'>Inicio</Link>
            <Link href='/catalogo'>Catalogo</Link>
            <Link href='/contacto'>Contacto</Link>
            <Link href='/nosotros'>Nosotros</Link>
          </div>
        </div>
        
        <div className={styles.links}>
          <div className={styles.iconlist}>
            <span className={styles.listTitle}></span>
          <Link href='http://wa.me/qr/A2RTH4IJVTBQA1' target="_blank" rel="noopener noreferrer">
            <div>
              <Image src='/whatsapp.png' alt='wp' width={35} height={35}className={styles.icons}/>
            </div>
          </Link>
          <Link href='https://www.google.com/maps/place/Auto+Baires/@-34.5820855,-58.4782629,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcb66d0c995fb5:0x93d940f9c4090b96!8m2!3d-34.5820855!4d-58.475688!16s%2Fg%2F1thd2_2p?entry=ttu' target="_blank" rel="noopener noreferrer">
            <div>
            <Image src='/location.png' alt='gm' width={35} height={35} className={styles.icons}/>
            </div>
          </Link>
          <Link href='https://www.facebook.com/pages/Autobaires/655338307852614?locale=es_LA' target="_blank" rel="noopener noreferrer">
            <div>
            <Image src='/facebook.png' alt='fb' width={35} height={35} className={styles.icons} />
            </div>
          </Link>
          <Link href='https://www.instagram.com/autobairesagencia/' target="_blank" rel="noopener noreferrer">
            <div>
            <Image src='/instagram.png' alt='ig' width={35} height={35}  className={styles.icons} /> 
            </div>
          </Link>
          </div>
        </div>
      </div>
      <h1 className={styles.logoText}>@AutoBaires {new Date().getFullYear()} - Todos los derechos reservados</h1>
    </div>
  )
}

export default Footer
