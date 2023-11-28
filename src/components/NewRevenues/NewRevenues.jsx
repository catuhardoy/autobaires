import React from 'react'
import styles from './newRevenues.module.css'
import Revenue from '../Revenue/Revenue';
import { fetchCars } from '@/libs/data';

const NewRevenues = async () => {

  /* const sortByDate = (array) => {
    return array.sort(({createdAt: a}, {createdAt: b}) => a < b ? -1 : a > b ? 1 : 0);
  } */

  const data = await fetchCars();
  console.log(data);
  const revenue = data.cars.slice(-3).reverse();
  
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Últimos Ingresos</h2>
      <div className={styles.cards}>
        {revenue.map((revenue) => (
          <Revenue key={revenue._id} revenue={revenue} />
        ))}
      </div>
    </div>
  );
};


export default NewRevenues
