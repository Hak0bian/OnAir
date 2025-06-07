import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks/hooks';
import { MovieCard, TvSeriesCard, ActorCard } from '../index';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MainButton from '../UI/MainButton/MainButton';
import styles from './RecentlyUpdated.module.css'
import '../global.css'


const RecentlyUpdated = () => {
    const [ value, setValue ] = useState('1');
    const { movies } = useAppSelector((state) => state.moviesData);
    const { actors } = useAppSelector((state) => state.actorsData)
    const { tvSeries } = useAppSelector((state) => state.tvSeriesData)

    const handleChange = (_: any, newValue: string) => {
        setValue(newValue);
    };

    return (
        <section className='container'>
            <TabContext value={value}>
                <div>
                    <TabList onChange={handleChange}>
                        <Tab label="Movies" value="1" className="tabItem" />
                        <Tab label="TV Series" value="2" className="tabItem" />
                        <Tab label="Actors" value="3" className="tabItem" />
                    </TabList>
                </div>
                <TabPanel value="1" sx={{ padding: '28px 0 0' }}>
                    <section>
                        <div className={styles.gridContainer}>
                            {
                                movies
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

                <TabPanel value="2" sx={{ padding: '28px 0 0' }}>
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

                <TabPanel value="3" sx={{ padding: '28px 0 0' }}>
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