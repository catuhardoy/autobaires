import SideNav from '@/components/SideNav/SideNav';
import styles from './dashboard.module.css';

export default function DashboardLayout({ children }) {
    return (
        <div className={styles.container}>
            <SideNav />
            {children}
        </div>
    );
};