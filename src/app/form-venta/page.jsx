import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

function formVenta() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Querés vender tu auto?</h1>
      <h3 className={styles.subtitle}>Completa el formulario!</h3>

      <div className={styles.content}>

      <form className={styles.form} >

<input 
type='text'
name= 'name'
minLength={3}
maxLength={30}
placeholder='Nombre' 
className={styles.input} 
required />

<input 
type='text'
name= 'phone'
minLength={3}
maxLength={20}
placeholder='Telefono' 
className={styles.input} 
required />

<input type="email" 
name= 'email'
placeholder='Email'
minLength={5}
maxLength={150} 
className={styles.input} 
required />

<input type="marca" 
name= 'marca'
placeholder='Marca'
minLength={5}
maxLength={150} 
className={styles.input} 
required />

<input type="modelo" 
name= 'modelo'
placeholder='Modelo'
minLength={5}
maxLength={150} 
className={styles.input} 
required />

<input type="año" 
name= 'año'
placeholder='Año'
minLength={5}
maxLength={150} 
className={styles.input} 
required />

<textarea 
placeholder='Mensaje' 
name = "message"
cols='50' rows='4' className={styles.textArea}
required></textarea> 

<button type ='submit' className={styles.button}>ENVIAR</button>
</form>
        


      </div>
      {/* <img src='/venta_auto.jpeg' height={'110px'} width={'170px'} alt='logo' className={styles.image}/> */}
    </div>
  )
}

export default formVenta