import Link from 'next/link';
import Image from 'next/image';
import NavLinks from './NavLinks';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import styles from './SideNav.module.css';


export default function SideNav() {
  return (
    <div className={styles.container}>
      <div className={styles.sidenav}>
        <NavLinks />
        <Link 
        key={'exit'}
        href={'/'}
        className={styles.exit_link} >
            <ExitToAppIcon fontSize='small' />
            <p>Salir</p>
        </Link>
      </div>
      
      
    </div>
  );
};