import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <p className={styles.footerText}>Cinemania is always waiting for you. Come back to discover new genres and stories!</p>
        <p className={styles.footerText}>© 2025 | All Rights Reserved | Developed by Garik Hakobyan</p>
      </div>
    </footer>
  )
}

export default Footer