import React from 'react';
import { Suspense } from 'react';
import Detail from '@/components/Detail/Detail';
import { fetchCarById } from '@/libs/data';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './page.module.css'

export default async function Page ({params}) {

    const {id} = params;
    const data = await fetchCarById(id);

    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <Detail data = {data.car}/> 
        </Suspense>
    
    );
};
