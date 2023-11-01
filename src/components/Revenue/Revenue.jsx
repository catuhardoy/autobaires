import React from 'react'
import styles from './revenue.module.css'
import { Pagination } from '@mui/material'

const Revenue = ({revenue}) => {

   return (
    <div className={styles.container}>
    <div className= {styles.card}>
    <img src={revenue.photo} alt={revenue.name} className={styles.img} />   
    <h3 className={styles.name}>{revenue.name}</h3>
    <p className={styles.year}>{revenue.year}</p>
    <h4 className={styles.price}>PRECIO: {revenue.price}</h4>
    <p className={styles.desc}>{revenue.desc}</p>

    <div>
        <button className={styles.button}>CONSULTAR</button>
        
    </div>
    
  </div>
  </div>
  // falta re direccionar al auto especifico con el boton consultar
  
   )
}

export default Revenue
