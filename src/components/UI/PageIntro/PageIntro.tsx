import { IPageIntroPropsType } from '../../componentsTypes/propsTypes'
import styles from './PageIntro.module.css'

const PageIntro = ({title, text} : IPageIntroPropsType) => {
    return (
        <div className={styles.sectionHeader}>
            <div className={styles.headerDiv}>
                <h2 className={styles.sectionTitle}> {title} </h2>
                <p className={styles.sectionText}> {text} </p>
            </div>
        </div>
    )
}

export default PageIntro