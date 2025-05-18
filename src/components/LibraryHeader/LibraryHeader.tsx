import libraryImg from '../../assets/images/library-desktop.png'
import styles from './LibraryHeader.module.css'

const LibraryHeader = () => {
  return (
    <section className={styles.libraryHeader}>
      <div className={styles.libraryTitleDiv}>
        <h2 className={styles.libraryTitle}>Create Your Own Cinema</h2>
        <p className={styles.libraryText}>Is a guide to designing a personalized movie theater experience with the right equipment, customized decor, and favorite films. This guide helps you bring the cinema experience into your own home with cozy seating, dim lighting, and movie theater snacks.</p>
      </div>
      <div className={styles.libraryImg}>
        <img src={libraryImg} />
      </div>
    </section>
  )
}

export default LibraryHeader