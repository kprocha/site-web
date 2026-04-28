import styles from './Home.module.css'

function Home() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        Bem-vindo à <span>SIF Soft</span>
      </h1>
      <p className={styles.subtitle}>
        Empresa Júnior de Sistemas de Informação do IFNMG Campus Salinas.
        Desenvolvemos soluções tecnológicas com qualidade e compromisso.
      </p>
    </section>
  )
}

export default Home
