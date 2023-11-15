'use client'

import React from 'react'
import styles from './page.module.css'
import {useState} from 'react';
import {useRouter} from 'next/navigation';
import { uploadImage } from '@/libs/data';


function CarCreate() {

  
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [km, setKm] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [images, setImages] = useState([]);
  const [photoURLs, setPhotoURLs] = useState([]);
   

  const router = useRouter()

  const handleImagesChange = (e) => {
    setImages(e.target.files);
  };
  //console.log([...images]);

  const handleUploadImage = async (e) => {
    e.preventDefault();

    [...images].map(async (file) => {
      const res = await uploadImage(file);
      setPhotoURLs((prev)=> [...prev, res.url]);
      //console.log(res);
    });
  };
  console.log(photoURLs);
  
  
  const hanldleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !year ||!km || !description || !price ) {
      alert ('Todos los campos son requeridos');
      return;
    };
      
  
    try{
      const res = await fetch('http://localhost:3000/api/cars', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({name, year,km, description, price, photos: photoURLs})
      });

      if(res.ok){
        //router.push('/catalogo');
        console.log('Auto creado')
      }else{
        throw new Error ('No se creo el auto')
      }

    }catch(error){
      
      console.log(error)
    };
  };
  
  
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>AGREGAR NUEVA UNIDAD</h2>
      <form onSubmit = {hanldleSubmit} className={styles.form}>
        
        <input
        onChange={(e) => setName(e.target.value)} 
        value = {name}
        className={styles.input} 
        type="text" 
        placeholder='Nombre'
        id= 'name'
        />

        <input
        onChange={(e) => setYear(e.target.value)} 
        value = {year}
        className={styles.input} 
        type="text" 
        placeholder='Año'
        id= 'year'
        />

        <input
        onChange={(e) => setKm(e.target.value)} 
        value = {km}
        className={styles.input} 
        type="text" 
        placeholder='Kilometros'
        id= 'km'
        />

        <input
        onChange={(e) => setPrice(e.target.value)} 
        value = {price}
        className={styles.input} 
        type="text" 
        placeholder='Price'
        id= 'price'
        />
        
        <input 
        onChange={(e) => setDescription(e.target.value)} 
        value = {description}
        className={styles.input} 
        type="text" 
        placeholder='Descripción'
        id= 'description' 
        />

        <label htmlFor='photo' className={styles.image_imput}>
          <input
          className={styles.input}
          type="file"
          accept=".jpg, .jpeg, .png"
          id="photo"
          multiple onChange={handleImagesChange}
          /> 
          <button className={styles.btn} onClick={handleUploadImage}>Cargar</button>

        </label>
        
        <button className={styles.btn} type = "submit" >AGREGAR</button>
    </form>


      
    </div>
  );
};
  


export default CarCreate
