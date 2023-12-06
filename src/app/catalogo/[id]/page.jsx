'use client'
import React from 'react';
import styles from './page.module.css';
// import { items } from './data';
import Link from 'next/link';
import Image from 'next/image';
import { Divider } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useLayoutEffect } from 'react';
import { useParams } from 'next/navigation';
import Loading from '@/components/loading/Loading';


const CarDescription = () => {
  const useparams = useParams()
  // console.log(useparams)
  const carId = useparams.id; 
 
  const router = useRouter();

  const [car, setCar] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  useLayoutEffect(() => {
    const fetchCarData = async () => {
      try {
        if (carId) {
          const response = await fetch(`http://localhost:3000/api/cars/${carId}`);
          const data = await response.json();
          setCar(data.car);
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
       
      
      {car &&
      <div className={styles.left}>
          <div className={styles.item} key={car._id}>
            <div className={styles.imgContainer}>
              <img src={car.photoURLs[currentImageIndex].url} alt={car.photoURLs[currentImageIndex].filename} className={styles.img} />
            </div>
   
            <div className={styles.thumbnailContainer}>
              {car.photoURLs.map((photo, index) => (
                <img
                  key={index}
                  src={photo.url}
                  alt={`Thumbnail ${index + 1}`}
                  className={styles.thumbnail}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
      </div>}
      {car && 
      <div className={styles.right}>
          <div className={styles.content}>
            {/* <div className={styles.image}>
              <Image src = '/LOGO_AUTOBAIRES_03.png' alt='autobaires' width={140} height={80} style={{objectFit: 'cover'}} />
            </div> */}
            <h1 className={styles.name}>{`${car.brand} ${car.model}`}</h1>
            <p className={styles.data}><strong>Año:</strong> {car.year}</p>
            <p className={styles.data}><strong>Kilometros:</strong> {car.km}</p>

            <p className={styles.desc}><strong>Descripción:</strong> {car.description}</p>  
            <p className={styles.price}><strong>{`$ ${car.price}`}</strong></p>
            
            <div className={styles.options_btn}>
              <Link href='/catalogo'>
                <button className={styles.buttonBack}>VOLVER</button>
              </Link>
              <Link href='http://wa.me/qr/A2RTH4IJVTBQA1' target="_blank" rel="noopener noreferrer">
                <button className={styles.button}>CONSULTAR</button>
              </Link>
            </div>
              
          </div>

      </div>}

      {!car && <Loading/>}
    
    </div>
    
  );
};

export default CarDescription;




