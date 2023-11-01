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
import { useState, useEffect } from 'react';


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
    {id: 11, name: 'Peugot'},
    {id: 12, name: 'Renault'},
    {id: 13, name: 'Toyota'},
    {id: 14, name: 'Volskwagen'},

]

// const cars = [
//     {
//         id: 1,
//         name: 'Land Rover 200',
//         year: '2018',
//         desc: '1.8 thp Sport',
//         price: "$7.600.000",
//         photo: "/auto_venta1.jpg "
//       },
//       {
//           id: 2,
//           name: 'BMW 278',
//           year: '2020',
//           desc: '1.8 thp Sport',
//           price: "$20.600.000", 
//           photo: "/auto_venta2.jpg"

//       },
//       {
//           id: 3,
//           name: 'Mercedes Benz S G3',
//           year: '2021',
//           date: '2023-09-01',
//           desc: '1.8 thp Sport',
//           price: "$7.600.000",
//           photo: "/auto_venta3.jpg"
//       },
//       {
//           id: 4,
//           name: 'Peugot 208',
//           year: '2018',
//           date: '2023-09-01',
//           desc: '1.8 thp Sport',
//           price: "$7.600.000",
//           photo: "/auto_venta3.jpg"
//       },
//       {
//           id: 5,
//           name: 'Peugot 208',
//           year: '2018',
//           date: '2023-09-01',
//           desc: '1.8 thp Sport',
//           price: "$7.600.000",
//            photo: "/auto_venta3.jpg"
//       },
//       {
//         id: 6,
//         name: 'Land Rover 200',
//         year: '2018',
//         desc: '1.8 thp Sport',
//         price: "$7.600.000",
//         photo: "/auto_venta1.jpg "
//       },
  
//   ];


const Catalogo = () => {

  const [cars, setCars] = useState([])
  const [selectedBrand, setSelectedBrand] = useState('')
  const [sortType, setSortType] = useState(null)

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // O el número de items que prefieras mostrar por página

  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    async function fetchCars() {
        const res = await fetch('http://localhost:3000/api/cars');
        const data = await res.json();
        setCars(data.cars);
    }

    fetchCars();
}, []);

const getBrandFromName = (name) => {
  return name.split(' ')[0];
};

const handleBrandSelect = (brand) => {
  setSelectedBrand(brand);
};

const handleSort = (type)=>{
  setSortType(type);
}


const sortedCars = [...cars].sort((a, b) => {
  switch(sortType) {
    case 'price':
      return a.price - b.price
    case 'km':
      return a.km - b.km
    case 'year':
      return a.year - b.year
    default:
      return cars
  }
});

const filteredCars = selectedBrand 
  ? sortedCars.filter(car => getBrandFromName(car.name) === selectedBrand &&
  car.name.toLowerCase().includes(searchTerm.toLowerCase()))
  : sortedCars.filter(car => 
    car.name.toLowerCase().includes(searchTerm.toLowerCase()));

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

        <div className={styles.cardsContainer}>
            <div className={styles.carCards}>
                {currentItems.map((car)=> {

                  console.log(car)
                  
                  return(
                    <div key={car._id} className={styles.card}>
                   
                    <Link href = {`/catalogo/${car._id}`}>
                    {/* <img src={car.photo} alt={car.name} className={styles.img} />   */}
                     <img src='https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt={car.name} className={styles.img} />  
                    <h3 className={styles.brand}>{car.name}</h3>
                    <p className={styles.description}> {car.description}</p>
                    <p className={styles.km}>Km: {car.km}</p>
                    <p className={styles.year}>Año: {car.year}</p>
                    <p className={styles.price}>$ {car.price}</p>
                    </Link>
                    <button className={styles.button}>Consultar</button>
                    
                  </div>
                  )
              
        })}
            </div>
        </div>
        </div>
        <Stack spacing={2}>
        <Pagination
  count={Math.ceil(filteredCars.length / itemsPerPage)}
  page={currentPage}
  onChange={handleChangePage}
  variant="outlined" shape="rounded"
/>
</Stack>
    </div>
  )
}

export default Catalogo


// 'use client'
// import React from 'react';
// import styles from './page.module.css';
// // import { items } from './data';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Divider } from '@mui/material';
// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';


// const CarDescription = () => {
//   // const carId = parseInt(params.id); 

//   // const car = getData(carId);

//   const router = useRouter();
//   const { id } = router.query;
//   const [car, setCar] = useState(null);


//   useEffect(() => {
//     if (id) {
//       
//       fetch(`http://localhost:3000/api/cars/${id}`)
//         .then((res) => res.json())
//         .then((data) => setAuto(data))
//         .catch((error) => console.error('Error al cargar los datos del auto', error));
//     }
//   }, [id]);

//   if (!auto) {
//     return <p>Cargando...</p>;
//   }

//   return (
//     <div className={styles.container}>
       
      
//       <div className={styles.left}>
//         {car ? (
//           <div className={styles.item} key={car._id}>
//             <img src={car.photo} alt={car.name} className={styles.img} />
//           </div>
//         ) : (
//           <div>no se encontraron datos de este auto</div>
//         )}
//       </div>
//       <div className={styles.right}>
//         {car ? (
//           <div className={styles.content}>
//             <Image src = '/LOGO_AUTOBAIRES_03.png' alt='autobaires' width={120} height={120} className={styles.logo}/>
//             <h1 className={styles.name}>{car.name}</h1>
//             <p className={styles.name}>Año: {car.year}</p>
//             <p className={styles.year}>Kilometros: {car.km}</p>

//             <p className={styles.desc}>Descripción: {car.desc}</p>
//             <br />
//             <Divider/>
//             <p className={styles.price}>Precio: {car.price}</p>
            
//               <Link href='http://wa.me/qr/A2RTH4IJVTBQA1' target="_blank" rel="noopener noreferrer">
//                 <button className={styles.button}>CONSULTAR</button>
//               </Link>
//               <br />
//               <br />
//               <br />
//               <Link href='/catalogo'>
//                 <button className={styles.buttonBack}>VOLVER</button>
//               </Link>
              
//           </div>
//         ) : (
//           <div>No se encontraron datos</div>
//         )}
//       </div>
    
//     </div>
    
//   );
// };

// export default CarDescription;
