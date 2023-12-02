'use client'

import React from 'react';
import { useRouter , usePathname } from 'next/navigation';
import Link from 'next/link';
import { deleteCar, fetchCars, updateCar } from '@/libs/data';
import { useState, useLayoutEffect , useEffect } from 'react';
import { Pagination, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import styles from './Inventory.module.css';

export default function Inventory({data}) {

    const router = useRouter();
    const path = usePathname();
    const INITIAL_STATE = {
        loading: false,
        error: false,
        succesfull: false,
        message: '',
    };

    const [deleteStatus, setDeleteStatus] = useState(INITIAL_STATE);
    const [updateStatus, setUpdateStatus] = useState(INITIAL_STATE);
    const [open, setOpen] = useState(false);
    const [deleteID, setDeleteID] = useState('')
  
    const handleClickOpen = (id) => {
        setOpen(true);
        setDeleteID(id);
        console.log(id);
    };
    
    const [inventory, setInventory] = useState(data);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = inventory.slice(indexOfFirstItem, indexOfLastItem);

    useEffect(() => {
        setInventory(data);
        setOpen(false);
        setDeleteID('');
        //setDeleteStatus(INITIAL_STATE);
    }, [data]);

    //console.log(inventory);

    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage);
    };

    const handleSetFavorite = async (item) => {
        setUpdateStatus({
            ...updateStatus,
            loading: true,
        });
        
        const res = item.favorite ? await updateCar(item._id, {favorite: false}) : await updateCar(item._id, {favorite: true});
        
        if(res.data) {
            setUpdateStatus({
                ...updateStatus,
                loading: false,
                succesfull: true,
                message: 'Información actualizada con exito!'
            });
            return router.refresh();
        }
        else {
            setUpdateStatus({
                ...updateStatus,
                loading: false,
                error: true,
                message: 'Ha ocurrido un error, vuelve a intentarlo más tarde.'
            });
            return;
        };
    };

    const handleDelete = async (e) => {
        //e.preventDefault;
        setDeleteStatus({
            ...deleteStatus,
            loading: true
        });
        await deleteCar(deleteID).then((res) => {
            setDeleteStatus({
                ...deleteStatus,
                succesfull: true,
                message:'Unidad eliminada con exito!'
            });
            setOpen(false);
            router.refresh();       //Actualiza la pagina para volver a hacer el fetching de datos
        }).catch((err) => {
            console.log(err);
            setDeleteStatus({
                ...deleteStatus,
                error: true,
                message:'Ha ocurrido un error, vuelve a intentarlo más tarde.'
            });
        });
    };

    return (
        <div className={styles.container}>
            <h3>Inventario de unidades</h3>

            {currentItems.map((item) => (
                <div key={item._id} className={styles.item}>
                    {/* <div onClick={() => router.push(`${path}/${item._id}`)}></div> */}
                    <Link className={styles.item_link} href={`${path}/${item._id}`}>
                    
                        <h4>{`${item.brand} ${item.model}`}</h4>
                        <p>Km: {item.km}</p>
                        <p>Año: {item.year}</p>
                        <p>$ {item.price}</p>
                    </Link>
                    <IconButton aria-label='favorite' onClick={() => handleSetFavorite(item)}>
                            {item.favorite ? <FavoriteIcon sx={{color: 'red'}}/> : <FavoriteBorderIcon />}
                    </IconButton>
                    <IconButton onClick={() => handleClickOpen(item._id)}>
                        <DeleteIcon/>
                    </IconButton>
                </div>
            ))}

            <div className={styles.pagination}>
                <Stack spacing={2}>
                    <Pagination
                        count={Math.ceil(inventory.length / itemsPerPage)}
                        page={currentPage}
                        onChange={handleChangePage}
                        shape="rounded"
                    />
                </Stack>
            </div>

            <Dialog
            open={open}
            onClose={() => {
                setOpen(false);
                setDeleteID('');
            }}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            disableScrollLock={true}
            >
                <DialogContent>
                <DialogTitle id="alert-dialog-title">
                    {"¿Estas seguro de eliminar este producto?"}
                </DialogTitle>
                <DialogActions>
                    <Button color='inherit' sx={{margin: '10px'}} size='small' variant='contained' onClick={() => setOpen(false)} autoFocus disabled={deleteStatus.loading}>Cancelar</Button>
                    <LoadingButton sx={{margin: '10px'}} size='small' variant='contained' onClick={handleDelete} loading={deleteStatus.loading} disabled={deleteStatus.loading}>Eliminar</LoadingButton>
                </DialogActions>
                </DialogContent>
            </Dialog>

            <Snackbar open={deleteStatus.succesfull || updateStatus.succesfull} autoHideDuration={3000} onClose={() => {
                setDeleteStatus(INITIAL_STATE);
                setUpdateStatus(INITIAL_STATE);
            }}>
                <Alert severity='success' sx={{ width: '100%' }} variant='filled'>{deleteStatus.message || updateStatus.message}</Alert>
            </Snackbar>
           <Snackbar open={deleteStatus.error || updateStatus.error} autoHideDuration={3000} onClose={() => {
                setDeleteStatus(INITIAL_STATE);
                setUpdateStatus(INITIAL_STATE);
            }}>
                <Alert severity='error' sx={{ width: '100%' }} variant='filled'>{deleteStatus.message || updateStatus.message}</Alert>
            </Snackbar>


        </div>
    );
};

