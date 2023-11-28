'use client'

import React from 'react'
import styles from './revenue.module.css'
import { Pagination } from '@mui/material'
import { useRouter } from 'next/navigation'

const Revenue = ({revenue}) => {

  const router = useRouter();

   return (
      <div className= {styles.card}>
        <img src={revenue?.photoURLs[0].url} alt={revenue.name} className={styles.img} />   
        <h3 className={styles.name}>{revenue.name}</h3>
        <p className={styles.year}>{revenue.year}</p>
        <h4 className={styles.price}>PRECIO: {revenue.price}</h4>
        <p className={styles.desc}>{revenue.description}</p>

        <div>
            <button className={styles.button} onClick={() => {router.push(`/catalogo/${revenue._id}`)}}>VER</button>
        </div>
      
    </div>
  
   )
}

export default Revenue
