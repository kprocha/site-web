import styles from './Footer.module.css'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <p>© {year} SIF Soft — Empresa Júnior de SI · IFNMG Campus Salinas</p>
    </footer>
  )
}

export default Footer
