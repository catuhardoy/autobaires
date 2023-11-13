import React from 'react';
import { Suspense } from 'react';
import { fetchCars } from '@/libs/data';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './dashboard.module.css'
import Inventory from '@/components/Inventory/Inventory';

export default async function Dashboard() {
  
  const data = await fetchCars();

  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Inventory data={ data.cars }/>
    </Suspense>
    
  );
};
