'use client'

import React from 'react'
import styles from './page.module.css'
// import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Revenue from '@/components/Revenue/Revenue';
import NewRevenues from '@/components/NewRevenues/NewRevenues';
import { Pagination, Stack } from '@mui/material';
import Link from 'next/link';
import { useState, useEffect, useLayoutEffect } from 'react';
import Loading from '@/components/loading/Loading';


const carBrands = [
  {id: 1, name: 'Audi'},
  {id: 2, name: 'BMW'},
  {id: 3, name: 'Chevrolet'},
  {id: 4, name: 'Citroen'},
  {id: 5, name: 'Fiat'},
  {id: 6, name: 'Ford'},
  {id: 7, name: 'Honda'},
  {id: 8, name: 'Kia'},
  {id: 9, name: 'Mercedes Benz'},
  {id: 10, name: 'Nissan'},
  {id: 11, name: 'Peugeot'},
  {id: 12, name: 'Renault'},
  {id: 13, name: 'Toyota'},
  {id: 14, name: 'Volskwagen'},

];

const Catalogo = () => {

  const [cars, setCars] = useState([])
  const [selectedBrand, setSelectedBrand] = useState('')
  const [sortType, setSortType] = useState(null)

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // O el número de items que prefieras mostrar por página

  const [searchTerm, setSearchTerm] = useState('');


  useLayoutEffect(() => {
    async function fetchCars() {
        const res = await fetch('http://localhost:3000/api/cars');
        const data = await res.json();
        setCars(data.cars);
    };
    fetchCars();
}, []);
console.log(cars);

const handleBrandSelect = (brand) => {
  setSelectedBrand(brand);
};

const handleSort = (type)=>{
  setSortType(type);
}


const sortedCars = [...cars].sort((a, b) => {
  switch(sortType) {
    case 'price':
      return a.price.replaceAll('.', '') - b.price.replaceAll('.', '')
    case 'km':
      return a.km - b.km
    case 'year':
      return a.year - b.year
    default:
      return cars
  }
});

const filteredCars = selectedBrand 
  ? sortedCars.filter((car) => {
    if(car.brand === selectedBrand) {
      return car.brand.toLowerCase().includes(searchTerm.toLowerCase()) || car.model.toLowerCase().includes(searchTerm.toLowerCase())
    }
  })
  : sortedCars.filter((car) => car.brand.toLowerCase().includes(searchTerm.toLowerCase()) || car.model.toLowerCase().includes(searchTerm.toLowerCase()));

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = filteredCars.slice(indexOfFirstItem, indexOfLastItem);

const handleChangePage = (event, newPage) => {
  setCurrentPage(newPage);
};

  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
      <input
            type="text"
            placeholder="Buscar autos..."
            className={styles.input}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className={styles.button}>Buscar</button>
          <div className={styles.sortContainer}>
        
        <button onClick={()=> handleSort('price')} className={styles.sortButton}>Ordenar por Precio</button>
        <button onClick={()=> handleSort('km')} className={styles.sortButton}>Ordenar por Kilometraje</button>
        <button onClick={()=> handleSort('year')} className={styles.sortButton}>Ordenar por Antigüedad</button>
      </div>
      </div>
      

      <div className={styles.content}>
        <div className={styles.column}>
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="secondary mailbox folders">
        <List>

        <ListItem disablePadding>
          <ListItemButton onClick={() => handleBrandSelect('')}>
              <ListItemText primary="TODOS" />
          </ListItemButton>
        </ListItem>
              <Divider />
            {carBrands.map((brand, index)=> (
                <div key={brand.id}>

                    <ListItem key={brand.id} disablePadding>
                    <ListItemButton onClick={()=> handleBrandSelect(brand.name)}>
                      <ListItemText primary={brand.name} />
                    </ListItemButton>
                  </ListItem>
               
                  {index < carBrands.length - 1 && <Divider />}
                </div>
            ))}
            
        </List>
      </nav>
    </Box>
    </div>

        {cars.length !== 0 && <div className={styles.cardsContainer}>
            <div className={styles.carCards}>
                {currentItems.map((car)=> {
                  return(
                    <div key={car._id} className={styles.card}>
                   
                    <Link href = {`/catalogo/${car._id}`} className={styles.item_link}>
                    {/* <img src={car.photo} alt={car.name} className={styles.img} />   */}
                    <img src={car.photoURLs.length ? car.photoURLs[0].url : 'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} alt={car.name} className={styles.img} />  
                    <h3>{`${car.brand} ${car.model}`}</h3>
                    <p>{`Año: ${car.year} - Km: ${car.km}`}</p>
                    <p>{car.description}</p>
                    {/* <p className={styles.km}>{}</p> */}
                    </Link>
                    <div>
                      <button className={styles.button}>Consultar</button>
                      <p><strong>$ {car.price}</strong></p>
                    </div>
                    
                  </div>
                  )
              
                })}
            </div>
            <Stack spacing={2}>
                  <Pagination
            count={Math.ceil(filteredCars.length / itemsPerPage)}
            page={currentPage}
            onChange={handleChangePage}
            variant="outlined" shape="rounded"
          />
          </Stack>
          </div>}

          {!cars.length && <Loading />}
        </div>
    </div>
  );
};

export default Catalogo; 
