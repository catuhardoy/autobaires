'use client'
import React from 'react';
/* import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; */
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 
import styles from './slider.module.css';

const Sponsors = () => {

    const sliderItems = [{src: '/renault.png'} , {src: '/chevrolet.jpeg'} , {src: '/ford.jpeg'} , {src: '/peugot1.jpeg'} , {src: '/fiat.png'} , {src: '/vw.png'} , {src: '/citroen.jpeg'} , {src: '/honda.png'} , {src: '/audi.jpeg'} , {src: '/bmw.jpeg'} , {src: '/mercedesbenz.png'} , {src: '/alfa_romeo_logo.jpg'}];

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 400,

    }
    
    return (
    
        <div className={styles.container}>
        
                <Carousel showThumbs={false} showStatus={false} showIndicators={false} infiniteLoop autoPlay interval={3000} centerMode centerSlidePercentage={10} /* width={'70%'} */>
                    {sliderItems.map((item, index) => (
                        <div key={index} className={styles.item}>
                            <img src={item.src} height={'100px'} width={'100px'} alt='logo' />
                        </div>             
                    ))}
                </Carousel>
                    
        </div>
        
    )
}

export default Sponsors