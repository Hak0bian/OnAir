import { NavLink } from 'react-router-dom'
import { useAppDispatch } from '../../store/hooks/hooks'
import { changeMoviesPageNumber } from '../../store/slices'
import MainButton from '../UI/MainButton/MainButton'
import styles from './Header.module.css'

const Header = () => {
    const dispatch = useAppDispatch()
    const handleGetStarted = () => {
        dispatch(changeMoviesPageNumber(1))
    }

    return (
        <header className={styles.header}>
            <div className={styles.headerTitleDiv}>
                <h2 className={styles.headerTitle}>Let’s Make Your Dream Cinema</h2>
                <p className={styles.headerText}>Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers. Decorate your space, choose your films, and stock up on snacks for the full experience.</p>
                <NavLink to='/Movies/page/1' onClick={handleGetStarted}>
                    <MainButton text='Get Started' />
                </NavLink>
            </div>
        </header>
    )
}

export default Header