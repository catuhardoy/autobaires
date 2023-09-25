import React from 'react'
import styles from './cardPair.module.css'
import Image from 'next/image'

const CardPair = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardPair}>
      <div className={styles.card}>
        
        <div className={styles.image}>
        </div>  
        <h2 className={styles.title}>COMPRAR TU AUTO</h2> 
      </div>
      <div className={styles.card}>
        
        <h2 className={styles.title}>VENDER TU AUTO</h2>
        
        
      </div>
    </div>
    </div>
  )
}

export default CardPair

//poner logo autobaires somwhere
