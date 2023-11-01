'use client'
import React from 'react'
import styles from './contactForm.module.css'
import Image from 'next/image'
import { useRef } from 'react'
// import PopUp from '../PopUp/PopUp'
import emailjs from "@emailjs/browser"


const ContactForm = ({handleClose}) => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o4vfkaw', 'template_7ie8nvk', form.current, '1A8GA3CQFDActLpvr')
      .then((result) => {
          console.log("ok");
          handleClose();
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className={styles.container}>
     <Image src='/LOGO_AUTOBAIRES_03.png' alt= "autobaires" width={170} height={170} className={styles.logo}/>
    <h1 className={styles.title}>CONTACTANOS</h1>
    
    <h2 className={styles.subTitle}>Completá el formulario</h2>
    <div className={styles.content}>
    
     <form className={styles.form}  ref={form} onSubmit={sendEmail} >

      <input 
      type='text'
      name= "user_name"
      minLength={3}
      maxLength={30}
      placeholder='Nombre' 
      className={styles.input} 
      required />

<input 
      type='text'
      name= "user_phone"
      minLength={3}
      maxLength={20}
      placeholder='Telefono' 
      className={styles.input} 
      required />

      <input type="email" 
      name= "user_email"
      placeholder='Email'
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
    </div>

  )
}

export default ContactForm

// ContactForm.js
// const ContactForm = () => {
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const data = Object.fromEntries(formData);
    
//     const response = await fetch('/api/sendEmail', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });

//     if (response.ok) {
//       alert('Email sent successfully!');
//     } else {
//       alert('Failed to send email. Please try again later.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className={styles.form}>
//       {/* ...rest of your form code */}
//     </form>
//   );
// };

