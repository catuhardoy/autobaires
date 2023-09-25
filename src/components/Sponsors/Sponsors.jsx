import React from 'react'
import styles from './sponsors.module.css'

const Sponsors = () => {
  return (
    <div>
       <div className={styles.container}>


<div className={styles.slider}>

    <div className={styles.gradient1}></div>

    <div className={styles.slide_track}>

        <div className={styles.slide}>
            <img src='/renault.png' height={'110px'} width={'110px'} alt='logo' />
        </div>

        <div className={styles.slide}>
            <img src='/honda.png' height={'110px'} width={'110px'} alt='logo' />
        </div>
        
        <div className={styles.slide}>
            <img src='/audi.jpeg' height={'100px'} width={'120px'} alt='logo' />
        </div>
        
        <div className={styles.slide}>
            <img src='/ford.jpeg'height={'140px'} width={'190px'} alt='logo' />
        </div>
        
        <div className={styles.slide}>
            <img src='/bmw.jpeg' height={'90px'} width={'110px'} alt='logo' />
        </div>
        
        <div className={styles.slide}>
            <img src='/mercedesbenz.png' height={'110px'} width={'170px'} alt='logo' />
        </div>
        
        <div className={styles.slide}>
            <img src='/chevrolet.jpeg' height={'100px'} width={'150px'} alt='logo' />
        </div>

        <div className={styles.slide}>
            <img src='/fiat.png' height={'100px'} width={'150px'} alt='logo' />
        </div>

        <div className={styles.slide}>
            <img src='/citroen.jpeg' height={'100px'} width={'150px'} alt='logo' />
        </div>
            
    </div>
    
    <div className={styles.gradient2}></div>

</div>
</div>
    </div>
  )
}

export default Sponsors
