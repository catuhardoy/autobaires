'use client'
import React from 'react'
import styles from './imageSlider.module.css'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import PopUp from '../PopUp/PopUp'

const ImageSlider = () => {

const [currentSlide, setCurrentSlide] = useState(0);
const images = [
                'https://res.cloudinary.com/autobaires-cloud/image/upload/v1700670225/imagenes/aronfxi0mksldgtsyjqo.jpg',
                'https://res.cloudinary.com/autobaires-cloud/image/upload/v1700670226/imagenes/vpnopmksnnhbbzfao11u.jpg',
                'https://res.cloudinary.com/autobaires-cloud/image/upload/v1700670231/imagenes/gw8wtglcwem5dypgadez.jpg'];
const totalSlides = images.length;



useEffect(() => {
    const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 5000); 

    return () => {
      clearInterval(interval); 
    };
  }, [totalSlides]);

  

  return (
    <div className={styles.container}>
        <div className={styles.slider}>
       
            <div className={styles.sliderWrapper} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {images.map((image, index) => (
            <div key={index} className={styles.sliderItem}>
              <img src={image} alt={`img${index + 1}`} className={styles.image} /> 
             <div>
             <PopUp/>
             </div>
               
                
              
            </div>
          ))}
             </div>
            
        </div>
       
    </div>
  )
}

export default ImageSlider

//FALTA EL LINK TO CONTACTANOS

// className={styles.contactButton}
