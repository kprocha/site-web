import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import styles from './Navbar.module.css'

const links = [
  { to: '/', label: 'Início' },
  { to: '/blog', label: 'Blog' },
  { to: '/editais', label: 'Editais' },
]

function Navbar() {
  const { autenticado, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <span className={styles.logo}>SIF Soft</span>
        <ul className={styles.links}>
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
          {autenticado && (
            <li>
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
              >
                Admin
              </NavLink>
            </li>
          )}
        </ul>
        <div className={styles.auth}>
          {autenticado ? (
            <button className={styles.btnLogout} onClick={handleLogout}>
              Sair
            </button>
          ) : (
            <NavLink to="/login" className={styles.btnLogin}>
              Entrar
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
