import { IMainButtonPropsType } from '../../componentsTypes/propsTypes'
import styles from './MainButton.module.css'

const MainButton = ({text, onClick} : IMainButtonPropsType) => {
  return (
    <button type='submit' onClick={onClick} className={styles.mainBtn}>{text}</button>
  )
}

export default MainButton