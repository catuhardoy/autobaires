'use client'

import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Pagination, PaginationItem, Stack } from '@mui/material';
import styles from './revenue.module.css';

const data = ({data}) => {
  console.log(data);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {currentItems.map((item) => (
          <div key={item._id} className= {styles.card}>
            <img src={item?.photoURLs[0].url} alt={item.photoURLs[0].filename} className={styles.img} />   
            <h3 className={styles.name}>{`${item.brand} ${item.model}`}</h3>
            <p className={styles.year}>{item.year}</p>
            <h4 className={styles.price}>PRECIO: {item.price}</h4>
            <p className={styles.desc}>{item.description}</p>
            <div>
                <button className={styles.button} onClick={() => {router.push(`/catalogo/${item._id}`)}}>VER</button>
            </div>
          </div>
        ))}
      </div>

      <Stack spacing={2}>
        {data.length >= 4 && <Pagination
          count={Math.ceil(data.length / itemsPerPage)}
          boundaryCount={1}
          page={currentPage}
          onChange={handleChangePage}
          shape="circular"
        />}
      </Stack>
    </div>
  )
}

export default data
