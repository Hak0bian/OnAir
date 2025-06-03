import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { actorsThunk, latestMoviesThunk } from '../../store/slices';
import { NavLink } from 'react-router-dom';
import MainButton from '../UI/MainButton/MainButton';
import MovieCard from '../Movies/MovieCard/MovieCard';
import ActorCard from '../Actors/ActorCard/ActorCard';
import styles from './RecentlyUpdated.module.css'
import '../global.css'
import TvSeriesCard from '../TvSeries/TvSeriesCard/TvSeriesCard';

const RecentlyUpdated = () => {
    const [value, setValue] = React.useState('1');
    const { latestMovies, page } = useAppSelector((state) => state.homeMovies);
    const { actors } = useAppSelector((state) => state.actorsData)
    const { tvSeries } = useAppSelector((state) => state.tvSeriesData)
    const { selectedLanguage } = useAppSelector((state) => state.languagesData);
    const dispatch = useAppDispatch()

    const handleChange = (_: any, newValue: string) => {
        setValue(newValue);
    };

    React.useEffect(() => {
        dispatch(latestMoviesThunk({ page, selectedLanguage }));
        dispatch(actorsThunk({ page, selectedLanguage }))
    }, [selectedLanguage]);

    return (
        <section className='container'>
            <TabContext value={value}>
                <Box>
                    <TabList onChange={handleChange}>
                        <Tab label="Movies" value="1" className="tabItem" />
                        <Tab label="TV Series" value="2" className="tabItem" />
                        <Tab label="Actors" value="3" className="tabItem" />
                    </TabList>
                </Box>
                <TabPanel value="1" sx={{ padding: '48px 0 0' }}>
                    <section>
                        <div className={styles.gridContainer}>
                            {
                                latestMovies
                                    .slice(0, 12)
                                    .map((movie) => (<MovieCard key={movie.id} movie={movie} />))
                            }
                        </div>
                        <div className={styles.catalogBtn}>
                            <NavLink to={`/Movies/page/1`}>
                                <MainButton text='To catalog' />
                            </NavLink>
                        </div>
                    </section>
                </TabPanel>

                <TabPanel value="2" sx={{ padding: '48px 0 0' }}>
                    <section>
                        <div className={styles.gridContainer}>
                            {
                                tvSeries
                                    .slice(0, 12)
                                    .map((seria) => (<TvSeriesCard key={seria.id} seria={seria} />))
                            }
                        </div>
                        <div className={styles.catalogBtn}>
                            <NavLink to={`/TV/page/1`}>
                                <MainButton text='To catalog' />
                            </NavLink>
                        </div>
                    </section>
                </TabPanel>

                <TabPanel value="3" sx={{ padding: '48px 0 0' }}>
                    <section>
                        <div className={styles.gridContainer}>
                            {
                                actors
                                    .slice(0, 12)
                                    .map((actor) => (<ActorCard key={actor.id} actor={actor} />))
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