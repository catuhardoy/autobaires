'use client'

import React from 'react';
import { useRouter , usePathname } from 'next/navigation';
import Link from 'next/link';
import { deleteCar, fetchCars, updateCar } from '@/libs/data';
import { useState, useLayoutEffect , useEffect } from 'react';
import { Pagination, Stack } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './Detail.module.css';

export default function Detail ({data}) {

    //console.log(data);

    const router = useRouter();

    const INITIAL_STATE = {
        loading: false,
        error: false,
        succesfull: false,
        message: '',
    };

    const images = data.photoURLs;
    const defaultModel = data.name.split(' ');

    /* const [currentImage, setCurrentImage] = useState(0);
    const total = images?.length; */
    
    const [open, setOpen] = useState(false);
    const [update, setUpdate] = useState({
        input:'',
        value: null
    });
    const [updateStatus, setUploadStatus] = useState(INITIAL_STATE);

    const handleClick = (input, value) => {
        setUpdate({
            input,
            value
        });
        setOpen(true);
    };

    //console.log(update);

    const handleUpdate = async () => {

        //console.log(Object.values(update.value)[0]);
        if(!Object.values(update.value)[0]) return setUploadStatus({
            ...updateStatus,
            loading: false,
            error: true,
            message: 'Debe ingresar una nueva información antes de guardar.'
        });

        setUploadStatus({
            ...updateStatus,
            loading: true,
        });

        const res = await updateCar(data._id, update.value);
        
        if(res.data) {
            setUploadStatus({
                ...updateStatus,
                loading: false,
                succesfull: true,
                message: 'Información actualizada con exito!'
            });
            router.refresh();
            setTimeout(() => setOpen(false), 1000);
            return;
        }
        else {
            setUploadStatus({
                ...updateStatus,
                loading: false,
                error: true,
                message: 'Ha ocurrido un error, vuelve a intentarlo más tarde.'
            });
            return;
        };
    };
    
    
    /* useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % total);
        }, 5000); 
    
        return () => {
          clearInterval(interval); 
        };
      }, [total]); */

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
                <label>
                    <h3>{data.name}</h3>
                    <IconButton aria-label='edit' size="small" onClick={() => handleClick('Marca', {name: ''})}>
                        <EditIcon fontSize='small'/>
                    </IconButton>
                </label>

                <label>
                    <h4>Modelo: {data.model ? data.model : defaultModel[defaultModel.length -1]}</h4>
                    <IconButton aria-label='edit' size="small" onClick={() => handleClick('Modelo', {model: ''})}>
                        <EditIcon fontSize='small' />
                    </IconButton>
                </label>

                <label>
                    <p>Año: {data.year}</p>
                    <IconButton aria-label='edit' size="small" onClick={() => handleClick('Año', {year: ''})}>
                        <EditIcon fontSize='small' />
                    </IconButton>
                </label>

                <label>
                    <p>Km: {data.km}</p>
                    <IconButton aria-label='edit' size="small" onClick={() => handleClick('Kilometraje', {km: ''})}>
                        <EditIcon fontSize='small' />
                    </IconButton>
                </label>

                <label>
                    <p style={{fontSize: '16px' }}>{data.description}</p>
                    <IconButton aria-label='edit' size="small" onClick={() => handleClick('Descripción', {description: ''})}>
                        <EditIcon fontSize='small' />
                    </IconButton>
                </label>
                
                <label>
                    <p><strong>Precio: $ {data.price}</strong></p>
                    <IconButton aria-label='edit' size="small" onClick={() => handleClick('Precio', {price: ''})}>
                        <EditIcon fontSize='small' />
                    </IconButton>
                </label>
            </div>

            <Dialog open={open} onClose={() => setOpen(false)} disableScrollLock={true} fullWidth >
                <DialogTitle>Ingrese la nueva información de la unidad</DialogTitle>
                <DialogContent sx={{padding: '20px'}}>
                    <TextField
                        autoFocus
                        margin="normal"
                        id='value'
                        label={update.input}
                        type="text"
                        fullWidth
                        variant="outlined"
                        onChange={(e) => {
                            setUpdate({
                                ...update, 
                                value: { [Object.keys(update.value)[0]]: e.target.value }
                            }
                        )}}
                    />
                </DialogContent>
                <DialogActions sx={{padding: '20px'}}>
                    <Button color='inherit' sx={{margin: '10px'}} size='small' onClick={() => setOpen(false)} variant='contained' disabled={updateStatus.loading}>Cancelar</Button>
                    <LoadingButton sx={{margin: '10px'}} size="small" onClick={handleUpdate} loading={updateStatus.loading} variant='contained' disabled={updateStatus.loading}>Guardar</LoadingButton>
                </DialogActions>
            </Dialog>

            <Snackbar open={updateStatus.succesfull} autoHideDuration={5000} onClose={() => setUploadStatus(INITIAL_STATE)}>
                <Alert severity='success' sx={{ width: '100%' }} variant='filled'>{updateStatus.message}</Alert>
            </Snackbar>
           <Snackbar open={updateStatus.error} autoHideDuration={5000} onClose={() => setUploadStatus(INITIAL_STATE)}>
                <Alert severity='error' sx={{ width: '100%' }} variant='filled'>{updateStatus.message}</Alert>
            </Snackbar>
    
        </div>
    );
};
