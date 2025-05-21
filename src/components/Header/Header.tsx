import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { changeMoviesPageNumber } from '../../store/slices'
import MainButton from '../UI/MainButton/MainButton'
import styles from './Header.module.css'

const Header = () => {
    const dispatch = useAppDispatch()
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)

    const handleGetStarted = () => {
        dispatch(changeMoviesPageNumber(1))
    }

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                {
                    selectedLanguage === 'en' 
                    ? (
                        <div className={styles.headerTitleDiv}>
                            <h2 className={styles.headerTitle}>Let’s Make Your Dream Cinema</h2>
                            <p className={styles.headerText}>Forget crowded theaters — the magic of cinema can begin right in your own room. Invite friends, pick your favorite films, and enjoy a true cinematic experience at home.</p>
                            <NavLink to='/Movies/page/1' onClick={handleGetStarted}>
                                <MainButton text='Get Started' />
                            </NavLink>
                        </div>
                    ) : (
                        <div className={styles.headerTitleDiv}>
                            <h2 className={styles.headerTitle}>Создайте свой кинотеатр мечты</h2>
                            <p className={styles.headerText}>Забудьте о переполненных кинотеатрах — волшебство кино может начаться прямо у вас дома. Пригласите друзей, выберите любимые фильмы и наслаждайтесь настоящим кинопросмотром в уютной атмосфере.</p>
                            <NavLink to='/Movies/page/1' onClick={handleGetStarted}>
                                <MainButton text='Начни сейчас' />
                            </NavLink>
                        </div>
                    )
                }
            </div>
        </header>
    )
}

export default Header