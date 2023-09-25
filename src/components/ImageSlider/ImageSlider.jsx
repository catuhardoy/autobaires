'use client'
import React from 'react'
import styles from './imageSlider.module.css'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const ImageSlider = () => {

const [currentSlide, setCurrentSlide] = useState(0);
const images = ['/auto1.jpg', '/auto2.jpg', '/auto3.jpg'];
const totalSlides = images.length;


// const nextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
//   };
useEffect(() => {
    const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 5000); // Cambia la imagen cada 3 segundos (5000 ms)

    return () => {
      clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    };
  }, [totalSlides]);

  

  return (
    <div className={styles.container}>
        <div className={styles.slider}>
       
            <div className={styles.sliderWrapper} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {images.map((image, index) => (
            <div key={index} className={styles.sliderItem}>
              <img src={image} alt={`img${index + 1}`} className={styles.image} />
              <button className={styles.contactButton}>CONTACTANOS</button> 
              
            </div>
          ))}
             </div>
            
        </div>
       
    </div>
  )
}

export default ImageSlider

//FALTA EL LINK TO CONTACTANOS

