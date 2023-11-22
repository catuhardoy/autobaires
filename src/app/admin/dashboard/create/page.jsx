'use client'

import React from 'react'
import {useState} from 'react';
import {useRouter} from 'next/navigation';
import { uploadImage, uploadImages } from '@/libs/data';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import styles from './page.module.css'


function CarCreate() {

  const INITIAL_STATE = {
    loading: false,
    error: false,
    succesfull: false,
    message: '',
  };

  const [uploadStatus, setUploadStatus] = useState(INITIAL_STATE);
  const [createStatus, setCreateStatus] = useState(INITIAL_STATE);
  
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [km, setKm] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [images, setImages] = useState([]);
  const [photoURLs, setPhotoURLs] = useState([]);
   

  const router = useRouter();

  const resetForm = () => {
    setBrand('');
    setModel('');
    setYear('');
    setKm('');
    setDescription('');
    setPrice('');
  };

  const handleImagesChange = (e) => {
    setImages([]);
    setUploadStatus(INITIAL_STATE);
    setImages(e.target.files);
  };
  //console.log([...images]);

  const handleUploadImage = async (e) => {
    e.preventDefault();

    if(!images.length || !images) return alert ('Debes seleccionar una imagen');
    setUploadStatus({
      loading: true,
      error: false,
      succesfull: false,
      message: 'Procesando imagenes...',
    });

    const res = await uploadImages(images);
    
    Promise.all(res).then((res) => {
      console.log(res);
      setPhotoURLs(res.map((item) => {
        return {
          filename: item.id,
          url: item.url
        }
      }));
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
      setCreateStatus({
        loading: false,
        error: true,
        succesfull: false,
        message: 'Debe completar todos los campos.',
      });
      return;
    };

    setCreateStatus({
      loading: true,
      error: false,
      succesfull: false,
      message: '',
    });
      
    try{
      const res = await fetch('http://localhost:3000/api/cars', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({name: brand, model, year, km, description, price, photoURLs})
      });

      if(res.ok) {
        setCreateStatus({
          loading: false,
          error: false,
          succesfull: true,
          message: 'Nueva unidad en venta agregada!',
        });
        resetForm();
        return router.refresh();
          //router.push('/admin/dashboard');
      }else{
        setCreateStatus({
          loading: false,
          error: true,
          succesfull: false,
          message: 'Ha ocurrido un error, vuelve a intentarlo más tarde.',
        });
        
        throw new Error ('No se creo el auto');
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
        
        <button className={styles.btn} type = "submit" disabled={createStatus.loading || createStatus.succesfull} >
          {createStatus.loading ? <CircularProgress size={20}/> : 'AGREGAR'}
        </button>
    </form>

    {/* <Backdrop
    sx={{ color: '#fff'}}
    open={Boolean(createStatus.message)}
    >
      {createStatus.error && <Alert sx={{width: '50%' , justifyContent: 'center'}} severity="error"><strong>{createStatus.message}</strong></Alert>}
      {createStatus.succesfull && <Alert sx={{width: '50%' , justifyContent: 'center'}} severity="success"><strong>{createStatus.message}</strong></Alert>}
    </Backdrop> */}

    <Snackbar open={createStatus.succesfull} autoHideDuration={3000} onClose={() => setCreateStatus(INITIAL_STATE)}>
      <Alert severity='success' sx={{ width: '100%' }} variant='filled'>{createStatus.message}</Alert>
    </Snackbar>
    <Snackbar open={createStatus.error} autoHideDuration={3000} onClose={() => setCreateStatus(INITIAL_STATE)}>
      <Alert severity='error' sx={{ width: '100%' }} variant='filled'>{createStatus.message}</Alert>
    </Snackbar>
      
    </div>
  );
};
  


export default CarCreate
