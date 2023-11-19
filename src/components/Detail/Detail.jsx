'use client'

import React from 'react';
import { useRouter , usePathname } from 'next/navigation';
import Link from 'next/link';
import { deleteCar, fetchCars } from '@/libs/data';
import { useState, useLayoutEffect , useEffect } from 'react';
import { Pagination, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './Detail.module.css';

export default function Detail ({data}) {

    console.log(data);

    const [currentImage, setCurrentImage] = useState(0);
    const images = data.photoURLs;
    const total = images?.length;
    
    const defaultModel = data.name.split(' ');
    
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % total);
        }, 5000); 
    
        return () => {
          clearInterval(interval); 
        };
      }, [total]);

    return (
        <div className={styles.container}>

            <h2>Detalles de la unidad</h2>

            <div className={styles.images_section}>
    
           
                {images?.map((item, index) => (
                    <div key={index} className={styles.image}>
                        <img src={item.url} alt={item.filename} /> 
                    </div>
                ))}
            
            
            </div>

            <div className={styles.info_section}>
                <h3>Marca: {data.name}</h3>
                <h3>Modelo: {data.model ? data.model : defaultModel[defaultModel.length -1]}</h3>
                <div>
                    <h4>Descripción:</h4>
                    <p style={{margin: '5px 0px' }}>{data.description}</p>
                </div>
                <p>Km: {data.km}</p>
                <p>Año: {data.year}</p>
                <p>Precio: $ {data.price}</p>
            </div>
    
        </div>
    );
};
