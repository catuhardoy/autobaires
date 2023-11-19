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
import styles from './Inventory.module.css';

export default function Inventory({data}) {

    const router = useRouter();
    const path = usePathname();

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
    }, [data]);

    //console.log(inventory);

    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage);
    };

    const handleDelete = async (e) => {
        //e.preventDefault;
        await deleteCar(deleteID).then(() => router.refresh()); //Actualiza la ruta hacia la misma pagina para volver a hacer el fetching de datos
    };

    return (
        <div className={styles.container}>
            <h3>Inventario de productos</h3>

            {currentItems.map((item) => (
                <div onClick={() => router.push(`${path}/${item._id}`)} key={item._id} className={styles.item}>
                    <h4>{item.name}</h4>
                    <p>Km: {item.km}</p>
                    <p>Año: {item.year}</p>
                    <p>$ {item.price}</p>
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
                    <Button onClick={() => setOpen(false)} autoFocus>Volver</Button>
                    <Button onClick={handleDelete}>Eliminar</Button>
                </DialogActions>
                </DialogContent>
            </Dialog>



        </div>
    );
};

