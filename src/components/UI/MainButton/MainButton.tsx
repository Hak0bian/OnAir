import { IMainButtonPropsType } from '../../componentsTypes/propsTypes'
import styles from './MainButton.module.css'

const MainButton = ({text, onClick} : IMainButtonPropsType) => {
  return (
    <button className={styles.mainBtn} onClick={onClick}>{text}</button>
  )
}

export default MainButton