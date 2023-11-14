'use client'

import React from 'react';
import { fetchCars } from '@/libs/data';
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
import styles from './Inventory.module.css';

export default function Inventory({data}) {

    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const [inventory, setInventory] = useState(data);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = inventory.slice(indexOfFirstItem, indexOfLastItem);

    /* useLayoutEffect(() => {
        async function fetching() {
            const data = await fetchCars();
            setInventory(data.cars);
        };
        fetching();
    }, []) */

    console.log(inventory);

    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage);
    };

    const handleDelete = (e) => {
        //e.preventDefault;
        
        console.log('delete function');
        console.log(e);
    };

    return (
        <div className={styles.container}>
            <h3>Inventario de productos</h3>

            {currentItems.map((item) => (
                <div key={item._id} className={styles.item}>
                    <h4>{item.name}</h4>
                    <p>Km: {item.km}</p>
                    <p>Año: {item.year}</p>
                    <p>$ {item.price}</p>
                    <IconButton onClick={() => handleClickOpen()}>
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
            onClose={() => setOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            disableScrollLock={true}
            >
                <DialogContent>
                <DialogTitle id="alert-dialog-title">
                    {"¿Estas seguro de eliminar este producto?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={() => setOpen(false)} autoFocus>Volver</Button>
                    <Button onClick={handleDelete}>Eliminar</Button>
                </DialogActions>
                </DialogContent>
            </Dialog>



        </div>
    );
};

