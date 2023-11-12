'use client'
import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import Image from 'next/image'
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const links = [
    {
        id: 1,
        title: 'INICIO',
        url: '/'
    },
    {
        id: 2,
        title: 'CATALOGO',
        url: '/catalogo'
    },
    {
        id: 3,
        title: 'CONTACTO',
        url: '/contacto'
    },
  
    // {
    //     id: 4,
    //     title: 'NOSOTROS',
    //     url: '/nosotros'
    // },
   
]

function Navbar() {
  return (
    <div className={styles.container}>
      <Link href='/'>
      <Image src='/LOGO_AUTOBAIRES_02.png' alt= "autobaires" width={180} height={180} className={styles.logo}/>
      </Link>
      <div className={styles.links}>
        
        {links.map((link) =>(
          <Link key = {link.id} href={link.url}>
            <div className={styles.item}>
              <p>{link.title}</p>
              <div className={styles.underline}></div>
            </div>
          </Link>
        ))}

        <Link key={'admin'} href={'/admin'}>
          <IconButton color='inherit' sx={{pb: '12px'}}>
            <AccountCircleIcon/>
          </IconButton>
        </Link>

      </div>
    </div>

  )
}

export default Navbar
