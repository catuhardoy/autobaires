'use client'
import React from 'react';
import styles from './page.module.css';
// import { items } from './data';
import Link from 'next/link';
import Image from 'next/image';
import { Divider } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const CarDescription = () => {
  const useparams = useParams()
  console.log(useparams)
  const carId = useparams.id; 
 
  const router = useRouter();

  const [car, setCar] = useState(null);


  useEffect(() => {
    const fetchCarData = async () => {
      try {
        if (carId) {
          const response = await fetch(`http://localhost:3000/api/cars/${carId}`);
          const data = await response.json();
          setCar(data);
        }
      } catch (error) {
        console.error('Error al cargar los datos del auto', error);
      }
    };
  
    fetchCarData();
  }, [carId]);

  if (!carId) {
    return <p>Cargando...</p>;
  }
  
  return (
    <div className={styles.container}>
       
      
      <div className={styles.left}>
        {car ? (
          <div className={styles.item} key={car._id}>
             <img src='https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt={car.name} className={styles.img} />
          </div>
        ) : (
          <div>no se encontraron datos de este auto</div>
        )}
      </div>
      <div className={styles.right}>
        {car ? (
          <div className={styles.content}>
            <Image src = '/LOGO_AUTOBAIRES_03.png' alt='autobaires' width={100} height={100} className={styles.logo}/>
            <h1 className={styles.name}>{car.name}</h1>
            <p className={styles.name}>Año: {car.year}</p>
            <p className={styles.year}>Kilometros: {car.km}</p>

            <p className={styles.desc}>Descripción: {car.desc}</p>
            <br />
            <Divider/>
            <p className={styles.price}>Precio: {car.price}</p>
            
              <Link href='http://wa.me/qr/A2RTH4IJVTBQA1' target="_blank" rel="noopener noreferrer">
                <button className={styles.button}>CONSULTAR</button>
              </Link>
              <br />
              <br />
              <br />
              <Link href='/catalogo'>
                <button className={styles.buttonBack}>VOLVER</button>
              </Link>
              
          </div>
        ) : (
          <div>No se encontraron datos</div>
        )}
      </div>
    
    </div>
    
  );
};

export default CarDescription;




