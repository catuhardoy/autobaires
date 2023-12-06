import React from 'react'
import styles from './sponsors.module.css'

const Sponsors = () => {

    const sliderItems = [{src: '/renault.png'} , {src: '/chevrolet.jpeg'} , {src: '/ford.jpeg'} , {src: '/peugot1.jpeg'} , {src: '/fiat.png'} , {src: '/citroen.jpeg'} , {src: '/vw.png'} , {src: '/honda.png'} , {src: '/bmw.jpeg'} , {src: '/audi.jpeg'} , {src: '/mercedesbenz.png'} , {src: '/alfa_romeo_logo.jpg'}];
    
    return (
    
        <div className={styles.container}>
            <div className={styles.slider}>
                <div className={styles.gradient1}></div>
                <div className={styles.slide_track}>
                    {sliderItems.map((item, index) => (
                        <div key={index} className={styles.slide}>
                            <img src={item.src} height={'100px'} width={'100px'} alt='logo' />
                        </div>                    
                    ))}
                </div>
                    
                <div className={styles.gradient2}></div>

            </div>
        </div>
    )
}

export default Sponsors


//TOYOTA, VOLSKWAGEN, ALFAROMEO, PEUGOT
