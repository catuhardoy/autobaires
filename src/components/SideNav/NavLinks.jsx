'use client'

import HomeIcon from '@mui/icons-material/Home';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SettingsIcon from '@mui/icons-material/Settings';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './SideNav.module.css';

const links = [
    { name: 'Inicio', href: '/', icon: HomeIcon },
    { name: 'Inventario', href: '/admin/dashboard', icon: SpaceDashboardIcon, },
    { name: 'Agregar', href: '/admin/dashboard/create', icon: AddBoxIcon },
    { name: 'Ajustes', href: '/admin/config', icon: SettingsIcon },
];
  
export default function NavLinks() {

    const path = usePathname();
    const {id} = useParams();
    //console.log(path);

    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                    key={link.name}
                    href={link.href}
                    className={path === link.href || path.includes(`${link.href}/${id}`) ? styles.selected : styles.link}
                    >
                        <LinkIcon fontSize='small' />
                        <p>{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
};