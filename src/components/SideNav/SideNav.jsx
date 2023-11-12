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
      </div>
        {/* <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div> */}
      
      <a 
      key={'exit'}
      href={'/'}
      className={styles.exit_link} >
          <ExitToAppIcon fontSize='small' />
          <p>Salir</p>
      </a>
      
    </div>
  );
}