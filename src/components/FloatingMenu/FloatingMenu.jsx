'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import styles from './floatingMenu.module.css'

function FloatingMenu() {

  const path = usePathname();
  //console.log(path);

  return (
    <div className={path.includes('admin') ? styles.none : styles.container}>
       <Link href='http://wa.me/qr/A2RTH4IJVTBQA1' target="_blank" rel="noopener noreferrer">
          <div>
            <Image src='/whatsapp.png' alt='wp' width={35} height={35}className={styles.icons}/>
          </div>
        </Link>
        <Link href='https://www.google.com/maps/place/Auto+Baires/@-34.5820855,-58.4782629,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcb66d0c995fb5:0x93d940f9c4090b96!8m2!3d-34.5820855!4d-58.475688!16s%2Fg%2F1thd2_2p?entry=ttu' target="_blank" rel="noopener noreferrer">
          <div>
          <Image src='/location.png' alt='gm' width={35} height={35} className={styles.icons}/>
          </div>
        </Link>
        <Link href='https://listado.mercadolibre.com.ar/autobaires' target="_blank" rel="noopener noreferrer">
          <div>
          <Image src='/shop1.png' alt='shop' width={35} height={35} className={styles.icons}/>
          </div>
        </Link>
        <Link href='https://www.instagram.com/autobairesagencia/' target="_blank" rel="noopener noreferrer">
          <div>
          <Image src='/instagram.png' alt='ig' width={35} height={35} className={styles.icons}/>
          </div>
        </Link>
    </div>
  );
}

export default FloatingMenu;
