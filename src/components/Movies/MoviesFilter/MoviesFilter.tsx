import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';
import { translations } from '../../../translations/translations';
import { changeMoviesPageNumber, changeMoviesSortBy } from '../../../store/slices';
import styles from './MoviesFilter.module.css'


const MoviesFilter = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { sortBy } = useAppSelector((state) => state.moviesData)
    const { selectedLanguage } = useAppSelector((state) => state.languagesData);
    const t = translations[selectedLanguage].movies.filter

    const sortOptions = [
        { label: t.popularity, value: 'popularity.desc' },
        { label: t.rating, value: `vote_average.desc` },
        { label: t.date, value: `release_date.desc` },
        { label: t.vote, value: `vote_count.desc` },
    ]

    const handleChange = (filter: string) => {
        dispatch(changeMoviesSortBy(filter));
        dispatch(changeMoviesPageNumber(1));
        navigate('/Movies/page/1');
    };

    return (
        <div>
            <select
                value={sortBy || 'default'}
                onChange={(e) => handleChange(e.target.value)}
                className={styles.select}
            >
                <option value={`default`} disabled hidden className={styles.option}>{t.sort}</option>
                {sortOptions.map((option) => (
                    <option key={option.value} value={option.value} className={styles.option}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default MoviesFilter