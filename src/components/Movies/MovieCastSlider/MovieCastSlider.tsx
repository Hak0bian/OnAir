import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks/hooks';
import { translations } from '../../../translations/translations';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
SwiperCore.use([Autoplay, Pagination]);
import CastCard from '../CastCard/CastCard';
import styles from './MovieCastSlider.module.css';

const MovieCastSlider = ({ movieId }: { movieId: number }) => {
    const { movieCast } = useAppSelector((state => state.moviesData))
    const { selectedLanguage } = useAppSelector((state => state.languagesData))
    const t = translations[selectedLanguage]
    const filteredMoviecast = movieCast.slice(0, 12);

    return (
        <section className={styles.slideSection}>
            <div className={styles.slideTopDiv}>
                <h3 className={styles.slideTitle}>{t.movies.cast}</h3>
                <NavLink to={`/Movies/movie/${movieId}/cast`} className={styles.seeAll}>{t.slider.seeAll}</NavLink>
            </div>
            {
                filteredMoviecast.length > 0
                    ? (<Swiper
                        spaceBetween={16}
                        slidesPerView={6}
                        loop={true}
                        autoplay={{ delay: 2000 }}
                        breakpoints={{
                            340: { slidesPerView: 1 },
                            440: { slidesPerView: 2 },
                            640: { slidesPerView: 3 },
                            840: { slidesPerView: 5 },
                            1240: { slidesPerView: 6 }
                        }}
                        pagination={{
                            el: `.swiper-pagination-cast`,
                            clickable: true,           
                            dynamicBullets: false,    
                            type: 'bullets',              
                        }}
                    >
                        {filteredMoviecast.map((actor) => (
                            <SwiperSlide>
                                <CastCard actor={actor} />
                            </SwiperSlide>
                        ))}
                        <div className='swiper-pagination-cast'></div>
                    </Swiper>)
                    : (<p className={styles.noMovies}>{t.movies.castNotFound}</p>)
            }
        </section>
    );
};

export default MovieCastSlider;