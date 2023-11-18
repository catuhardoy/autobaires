'use client'
import React from 'react'
import styles from './imageSlider.module.css'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import PopUp from '../PopUp/PopUp'

const ImageSlider = () => {

const [currentSlide, setCurrentSlide] = useState(0);
const images = [ 'DSC_2435.jpg','DSC_2649.jpg','DSC_2590.jpg'];
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
