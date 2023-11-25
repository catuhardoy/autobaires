import { Suspense } from 'react';
import Loading from '@/components/loading/Loading';
import SideNav from '@/components/SideNav/SideNav';
import styles from './dashboard.module.css';

export default function DashboardLayout({ children }) {
    return (
        <div className={styles.container}>
            <SideNav />
            <Suspense fallback={<Loading height={'50vh'} width={'75%'}/>}>
                {children}
            </Suspense>
        </div>
    );
};