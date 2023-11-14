'use client'
import React from 'react'
import styles from './page.module.css'
import {useState} from 'react';
import {useRouter} from 'next/navigation';
// import cloudinary from 'cloudinary';

// cloudinary.v2.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
// });


function CarCreate() {

  
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [km, setKm] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [photoURLs, setPhotoURLs] = useState([]);
   

    const router = useRouter()

    // const handlePhotosChange = (e) => {
    // const selectedPhotos = Array.from(e.target.files);
    // setPhotos(selectedPhotos);
    // console.log(e);
    // };

    const handlePhotosChange = async (e) => {
      const selectedPhotos = Array.from(e.target.files);
  
      const uploadedPhotoURLs = await Promise.all(selectedPhotos.map(photo => {
          const formData = new FormData();
          formData.append('file', photo);
          formData.append('upload_preset', 'autobaires');  // Reemplaza 'YOUR_UPLOAD_PRESET' con el preset que creaste en Cloudinary
  
          return fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`, {
              method: "POST",
              body: formData
          })
          .then(response => response.json())
          .then(data => data.secure_url)  // Aquí obtienes la URL de la imagen en Cloudinary
          .catch(error => console.error("Error subiendo imagen:", error));
      }));
  
      setPhotoURLs(uploadedPhotoURLs); // Almacena las URLs en el estado
  };
  
  
    const hanldleSubmit = async (e) => {
      e.preventDefault();
  
      if (!name || !year ||!km || !description || !price ) {
        alert ('Todos los campos son requeridos');
        return;
      };
      // const formData = new FormData();
      // formData.append('name', name);
      // formData.append('year', year);
      // formData.append('km', km);
      // formData.append('description', description);
      // formData.append('price', price);

      // photos.forEach((photo) => {
      //     formData.append('photos', photo);  // Agrega cada foto al FormData
      // });
//       try {
//         const res = await fetch('http://localhost:3000/api/cars', {
//             method: 'POST',
//             body: formData
//         });

//         if (res.ok) {
//             router.push('/catalogo');
//             console.log('Auto creado');
//         } else {
//             throw new Error('No se creó el auto');
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };





    // try {
    //   const res = await fetch('http://localhost:3000/api/cars', {
    //     method: 'POST',
    //     body: formData,
    //   });

  
      try{
        const res = await fetch('http://localhost:3000/api/cars', {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({name, year,km, description, price, photos: photoURLs})
        });
  
        if(res.ok){
          router.push('/catalogo');
          console.log('Auto creado')
        }else{
          throw new Error ('No se creo el auto')
        }
  
      }catch(error){
        
        console.log(error)
      }
    }
    // const handlePhotoChange = (e) => {
    //   const selectedPhoto = e.target.files[0];
    //   setPhoto(selectedPhoto); // Almacena la imagen seleccionada en el estado
    // };
  
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

           <input
            className={styles.input}
            type="file"
            accept=".jpg, .jpeg, .png"
            id="photo"
            multiple onChange={handlePhotosChange}
            
          /> 
          
          
          <button className={styles.btn} 
                  type = "submit" > 
          
          AGREGAR</button>
      </form>
  
  
        
      </div>
    )
  }
  


export default CarCreate
