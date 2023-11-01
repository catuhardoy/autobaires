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
            <img src='/renault.png' height={'135vh'} width={'100vw'} alt='logo' />
        </div>
        
        <div className={styles.slide}>
            <img src='/audi.jpeg' height={'100vh'} width={'120vw'} alt='logo' />
        </div>
        
        <div className={styles.slide}>
            <img src='/ford.jpeg'height={'140vh'} width={'160vw'} alt='logo' />
        </div>
        
        <div className={styles.slide}>
            <img src='/bmw.jpeg' height={'90vh'} width={'110vw'} alt='logo' />
        </div>

        <div className={styles.slide}>
            <img src='/mercedesbenz.png' height={'110vh'} width={'170vw'} alt='logo' />
        </div>
        

        <div className={styles.slide}>
            <img src='/honda.png' height={'110vh'} width={'110vw'} alt='logo' />
        </div>
        <div className={styles.slide}>
            <img src='/alfa_romeo_logo.jpg' height={'120vh'} width={'150vw'} alt='logo' />
        </div>

        <div className={styles.slide}>
            <img src='/chevrolet.jpeg' height={'100vh'} width={'150vw'} alt='logo' />
        </div>

        <div className={styles.slide}>
            <img src='/peugot1.jpeg' height={'100vh'} width={'150vw'} alt='logo' />
        </div>

        <div className={styles.slide}>
            <img src='/fiat.png' height={'100px'} width={'150vw'} alt='logo' />
        </div>

        <div className={styles.slide}>
            <img src='/citroen.jpeg' height={'100vh'} width={'150vw'} alt='logo' />
        </div>

        <div className={styles.slide}>
            <img src='/vw.png' height={'100vh'} width={'100vw'} alt='logo' />
        </div>

        <div className={styles.slide}>
            <img src='/alfa_romeo_logo.jpg' height={'120vh'} width={'150vw'} alt='logo' />
        </div>
            
    </div>
    
    <div className={styles.gradient2}></div>

</div>
</div>
    </div>
  )
}

export default Sponsors


//TOYOTA, VOLSKWAGEN, ALFAROMEO, PEUGOT
