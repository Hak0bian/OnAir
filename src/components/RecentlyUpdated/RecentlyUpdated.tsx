import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks/hooks';
import { MovieCard, TvSeriesCard, ActorCard } from '../index';
import { translations } from '../../translations/translations';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MainButton from '../UI/MainButton/MainButton';
import styles from './RecentlyUpdated.module.css'


const RecentlyUpdated = () => {
    const [value, setValue] = useState('1');
    const { movies, loadingMovies, errorMovies } = useAppSelector((state) => state.moviesData);
    const { tvSeries, loadingSeries, errorSeries } = useAppSelector((state) => state.tvSeriesData)
    const { actors, loadingActors, errorActors } = useAppSelector((state) => state.actorsData)
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)
    const t = translations[selectedLanguage]

    const handleChange = (_: any, newValue: string) => {
        setValue(newValue);
    };

    return (
        <section className='container'>
            <TabContext value={value}>
                <div>
                    <TabList onChange={handleChange}>
                        <Tab label={t.navigation.movies} value="1" className="tabItem" />
                        <Tab label={t.navigation.tv} value="2" className="tabItem" />
                        <Tab label={t.navigation.actors} value="3" className="tabItem" />
                    </TabList>
                </div>
                <TabPanel value="1" sx={{ padding: '0' }}>
                    <section>
                        <div className={styles.gridContainer}>
                            {
                                loadingMovies ? <p className='loading'>Loading...</p> 
                                : errorMovies ? <p className='error'>{errorMovies}</p>
                                : movies.slice(0, 12).map((movie) => (
                                    <MovieCard key={movie.id} movie={movie} />
                                ))
                            }
                        </div>
                        <div className={styles.catalogBtn}>
                            <NavLink to={`/Movies/page/1`}>
                                <MainButton text={t.catalog} />
                            </NavLink>
                        </div>
                    </section>
                </TabPanel>

                <TabPanel value="2" sx={{ padding: '0' }}>
                    <section>
                        <div className={styles.gridContainer}>
                            {
                                loadingSeries ? <p className='loading'>Loading...</p> 
                                : errorSeries ? <p className='error'>{errorSeries}</p>
                                : tvSeries.slice(0, 12).map((seria) => (
                                    <TvSeriesCard key={seria.id} seria={seria} />
                                ))
                            }
                        </div>
                        <div className={styles.catalogBtn}>
                            <NavLink to={`/TV/page/1`}>
                                <MainButton text='To catalog' />
                            </NavLink>
                        </div>
                    </section>
                </TabPanel>

                <TabPanel value="3" sx={{ padding: '0' }}>
                    <section>
                        <div className={styles.gridContainer}>
                            {
                                loadingActors ? <p className='loading'>Loading...</p> 
                                : errorActors ? <p className='error'>{errorActors}</p>
                                : actors.slice(0, 12).map((actor) => (
                                    <ActorCard key={actor.id} actor={actor} />
                                ))
                            }
                        </div>
                        <div className={styles.catalogBtn}>
                            <NavLink to={`/Actors/page/1`}>
                                <MainButton text='To catalog' />
                            </NavLink>
                        </div>
                    </section>
                </TabPanel>
            </TabContext>
        </section>
    )
}

export default RecentlyUpdated