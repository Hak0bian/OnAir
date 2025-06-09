import notFoundImg from '../../assets/images/not-found.jpg'
import styles from './NotFoundPage.module.css'

const NotFoundPage = () => {
    return (
        <div className={styles.notFoundDiv}>
            <img src={notFoundImg} className={styles.notFoundImg}/>
        </div>
    )
}

export default NotFoundPage