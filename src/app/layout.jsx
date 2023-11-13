import { Montserrat } from 'next/font/google'
import Navbar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer/Footer'
import FloatingMenu from '@/components/FloatingMenu/FloatingMenu'
import AuthProvider from '@/providers/AuthProvider'
import styles from './globals.css'
import './globals.css'


const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'AutoBaires Concesionaria'
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body >
        <AuthProvider>
        <div className={styles.container}>
        <Navbar/>
        <FloatingMenu/>
        {children}
        <Footer/>
        </div>
        </AuthProvider>
        </body>
    </html>
  )
}
