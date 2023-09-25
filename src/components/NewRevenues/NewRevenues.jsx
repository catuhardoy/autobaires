'use client'
import { useState } from 'react';
import React from 'react'
import styles from './newRevenues.module.css'
import Revenue from '../Revenue/Revenue';

const NewRevenues = () => {

    const [recentRevenues] = useState([
        {
          id: 1,
          name: 'Land Rover 200',
          year: '2018',
          desc: '1.8 thp Sport',
          price: "$7.600.000",
          photo: "/auto_venta1.jpg "
        },
        {
            id: 2,
            name: 'BMW 278',
            year: '2020',
            desc: '1.8 thp Sport',
            price: "$20.600.000", 
            photo: "/auto_venta2.jpg"

        },
        {
            id: 3,
            name: 'Mercedes Benz S G3',
            year: '2021',
            date: '2023-09-01',
            desc: '1.8 thp Sport',
            price: "$7.600.000",
            photo: "/auto_venta3.jpg"
        },
        // {
        //     id: 4,
        //     name: 'Paugot 208',
        //     year: '2018',
        //     date: '2023-09-01',
        //     desc: '1.8 thp Sport',
        //     price: "$7.600.000",
        //     photo: "/auto_venta3.jpg"
        // },
        // {
        //     id: 5,
        //     name: 'Paugot 208',
        //     year: '2018',
        //     date: '2023-09-01',
        //     desc: '1.8 thp Sport',
        //     price: "$7.600.000",
        //      photo: "/auto_venta3.jpg"
        // },
        // Agrega más ingresos aquí
      ]);
  
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Últimos Ingresos</h2>
      <div className={styles.cards}>
        {recentRevenues.map((revenue) => (
          <Revenue key={revenue.id} revenue={revenue} />
        ))}
      </div>
    </div>
  );
};


export default NewRevenues
