import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";
import { clearActorsResults, clearMovieResults, clearTvSeriesResults, setOpenBurger } from "../../../store/slices";
import { ISearchPropsType } from "../../componentsTypes/propsTypes";
import { translations } from '../../../translations/translations';
import { BiSolidMoviePlay } from "react-icons/bi";
import GradeIcon from '@mui/icons-material/Grade';
import styles from './SearchedSeriesList.module.css'


const SearchedSeriesList = ({inputValue, setInputValue }: ISearchPropsType) => {
    const { searchedSeries } = useAppSelector((state) => state.searchSeriesData);
    const { selectedLanguage } = useAppSelector((state) => state.languagesData);
    const t = translations[selectedLanguage].search
    const dispatch = useAppDispatch()

    const handleClick = () => {
        setInputValue('');
        dispatch(clearMovieResults())
        dispatch(clearActorsResults())
        dispatch(clearTvSeriesResults())
        dispatch(setOpenBurger(false))
    }

    const handleSeeResults = () => {
        dispatch(setOpenBurger(false))
    }

    return (
        <div>
            {searchedSeries.length > 0 && (
                <ul className={styles.resultList}>
                    <li className={styles.listTitle}>{t.series}</li>
                    {searchedSeries?.map((seria, ind) => (
                        <NavLink to={`/Movies/movie/${seria?.id}`} key={ind} onClick={handleClick}>
                            <li key={seria.id} className={styles.seriaListItem}>
                                <div className={styles.imageDiv}>
                                    {
                                        seria?.backdrop_path
                                        ? <img src={`https://image.tmdb.org/t/p/w200${seria?.backdrop_path}`}/>
                                        : <BiSolidMoviePlay className={styles.movieIcon} />
                                    }
                                </div>
                                <div>
                                    <p className={styles.title}>{seria.name.length > 30 ? seria?.name.slice(0, 30) + "..." : seria?.name}</p>
                                    <p className={styles.rating}>
                                        <GradeIcon className={styles.starIcon} />
                                        {seria?.vote_average.toFixed(1)}
                                    </p>
                                    <span className={styles.date}>{seria?.first_air_date}</span>
                                </div>
                            </li>
                        </NavLink>
                    ))}
                    <li className={styles.seeResults} onClick={handleSeeResults}>
                        <NavLink to={`/Search-Results?query=${encodeURIComponent(inputValue)}`}>{t.seeResults}</NavLink>
                    </li>
                </ul>
            )}
        </div>
    )
}

export default SearchedSeriesList