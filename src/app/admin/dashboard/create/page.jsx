'use client'

import React from 'react'
import {useState} from 'react';
import {useRouter} from 'next/navigation';
import { uploadImage, uploadImages } from '@/libs/data';
import LinearProgress from '@mui/material/LinearProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import Box from '@mui/material/Box';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import styles from './page.module.css'


function CarCreate() {

  const [uploadStatus, setUploadStatus] = useState({
    loading: false,
    error: false,
    succesfull: false,
    message: '',
  });
  
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [km, setKm] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [images, setImages] = useState([]);
  const [photoURLs, setPhotoURLs] = useState([]);
   

  const router = useRouter()

  const handleImagesChange = (e) => {
    setImages([]);
    setUploadStatus({
      loading: false,
      error: false,
      succesfull: false,
      message: '',
    });
    setImages(e.target.files);
  };
  //console.log([...images]);

  const handleUploadImage = async (e) => {
    e.preventDefault();
    setUploadStatus({
      loading: true,
      error: false,
      succesfull: false,
      message: 'Procesando imagenes...',
    });

    const res = await uploadImages(images);
    
    Promise.all(res).then((res) => {
      console.log(res);
      setPhotoURLs(res.map((item) => item.url));
      setUploadStatus({
        loading: false,
        error: false,
        succesfull: true,
        message: 'Carga exitosa!',
      });
    }).catch((err) => {
      setUploadStatus({
        loading: false,
        error: true,
        succesfull: false,
        message: 'Ha ocurrido un error!',
      });
    });


    /* [...images].map(async (file) => {
      const res = await uploadImage(file);
      setPhotoURLs((prev)=> [...prev, res.url]);
      console.log(res);
    }); */
  };
  //console.log(photoURLs);
  
  
  const hanldleSubmit = async (e) => {
    e.preventDefault();

    if (!brand || !model || !year ||!km || !description || !price ) {
      alert ('Todos los campos son requeridos');
      return;
    };
      
  
    try{
      const res = await fetch('http://localhost:3000/api/cars', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({name: brand, year,km, description, price, photoURLs})
      });

      if(res.ok){
        router.refresh();
        router.push('/admin/dashboard');
        console.log('Auto creado');
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
        onChange={(e) => setBrand(e.target.value)} 
        value = {brand}
        className={styles.input} 
        type="text" 
        placeholder='Marca'
        id= 'brand'
        />

        <input
        onChange={(e) => setModel(e.target.value)} 
        value = {model}
        className={styles.input} 
        type="text" 
        placeholder='Modelo'
        id= 'model'
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
        <div className={styles.upload_section}>
          <label htmlFor='photo' className={styles.image_input}>
            <input
            className={styles.input}
            type="file"
            accept=".jpg, .jpeg, .png"
            id="photo"
            multiple onChange={handleImagesChange}
            /> 
            <button disabled={uploadStatus.succesfull} className={uploadStatus.succesfull ? styles.disabled_btn : styles.upload_btn} onClick={handleUploadImage}>
              {uploadStatus.succesfull && <CheckCircleIcon/>}
              {uploadStatus.error && <ErrorIcon/>}
              {!uploadStatus.succesfull && !uploadStatus.error && <div><p>Cargar</p><CloudUploadIcon /></div>}
            </button>
          </label>
          <div className={uploadStatus.message ? styles.status : styles.hidden}>
            <p>{uploadStatus.message}</p>
            {uploadStatus.loading && <Box sx={{ width: '100%' }}>
              <LinearProgress />
            </Box>}
          </div>
        </div>
        
        <button className={styles.btn} type = "submit" >AGREGAR</button>
    </form>


      
    </div>
  );
};
  


export default CarCreate
