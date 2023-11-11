import HomeIcon from '@mui/icons-material/Home';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SettingsIcon from '@mui/icons-material/Settings';
import styles from './SideNav.module.css';
  
const links = [
    { name: 'Pagina principal', href: '/', icon: HomeIcon },
    { name: 'Inventario', href: '/admin/dashboard', icon: SpaceDashboardIcon, },
    { name: 'Agregar', href: '/admin/dashboard/create', icon: AddBoxIcon },
    { name: 'Ajustes', href: '/admin/config', icon: SettingsIcon },
  ];
  
  export default function NavLinks() {
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <a
                    key={link.name}
                    href={link.href}
                    className={styles.link}
                    >
                        <LinkIcon fontSize='small' />
                        <p>{link.name}</p>
                    </a>
                );
            })}
        </>
    );
};