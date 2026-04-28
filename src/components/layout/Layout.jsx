import { Outlet } from 'react-router-dom'
import { AuthProvider } from '../../context/AuthContext'
import Navbar from './Navbar'
import Footer from './Footer'
import styles from './Layout.module.css'

function Layout() {
  return (
    <AuthProvider>
      <div className={styles.wrapper}>
        <Navbar />
        <main className={styles.main}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </AuthProvider>
  )
}

export default Layout
