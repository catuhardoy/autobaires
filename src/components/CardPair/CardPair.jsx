import React from 'react'
import styles from './cardPair.module.css'
import Image from 'next/image'
import Link from 'next/link'
const CardPair = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardPair}>

      <div className={styles.card}>
        <Link href="/form-compra"> <h2 className={styles.title}>COMPRAR TU AUTO</h2> </Link> 
      </div>
      <div className={styles.card}>
        <Link href="/form-venta"> <h2 className={styles.title}>VENDER TU AUTO</h2 ></Link>
      </div>
    </div>
    </div>
  )
}

export default CardPair

//poner logo autobaires somwhere 
//consultarle a ema css.




