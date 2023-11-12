import Navbar from '@/components/NavBar/NavBar'
import './globals.css'
import { Montserrat } from 'next/font/google'
import styles from './globals.css'
import Footer from '@/components/Footer/Footer'
import FloatingMenu from '@/components/FloatingMenu/FloatingMenu'
import AuthProvider from '@/providers/AuthProvider'


const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'AutoBaires Concesionaria'
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
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
