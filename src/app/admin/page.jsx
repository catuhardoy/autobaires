'use client'
import { useState } from "react";
import styles from './page.module.css'
import Image from "next/image";

const Admin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const allowedEmail = "catalinahardoy@gmail.com"; // El correo electrónico permitido
    const allowedPassword = "admin123"; // La contraseña permitida
  
    const handleLogin = () => {
      if (email === allowedEmail && password === allowedPassword) {
        // Redireccionar al panel de administrador
        window.location.href = "/admin/dashboard";
      } else {
        alert("Credenciales no válidas");
      }
    };
  
    return (
      <div className={styles.container}>
        <div className={styles.box}>
        <div className={styles.logo}>
        <Image src = '/LOGO_AUTOBAIRES_03.png' alt='autobaires' width={120} height={120} className= {styles.logo}/>
        </div>
        <div className={styles.inputContainer}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleLogin} className={styles.button}>
          Iniciar sesión
        </button>
        </div>
        </div>
      </div>
    );
  };
  
export default Admin
