'use client'
import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import Image from 'next/image'


const links = [
    {
        id: 1,
        title: 'HOME',
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
      <Image src='/LOGO_AUTOBAIRES_02.png' alt= "autobaires" width={210} height={210} className={styles.logo}/>
      </Link>
      <div className={styles.links}>
      
        {links.map((link) =>(
        <Link key = {link.id} href={link.url}>
        <div className={styles.raise}>{link.title}</div>
        </Link>
        ))}
      </div>
    </div>

  )
}

export default Navbar
