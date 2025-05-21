import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
SwiperCore.use([Autoplay, Navigation]);
import CastCard from '../CastCard/CastCard';
import styles from './MovieCastSlider.module.css';
import { useAppSelector } from '../../../store/hooks/hooks';

const MovieCastSlider = ({ movieId }: { movieId: number }) => {
    const { movieCast } = useAppSelector((state => state.moviesData))
    const { selectedLanguage } = useAppSelector((state => state.languagesData))
    const filteredMoviecast = movieCast.slice(0, 15);

    return (
        <section className={styles.slideSection}>
            <div className={styles.slideTopDiv}>
                <h3 className={styles.slideTitle}>{selectedLanguage === 'en' ? 'Cast' : 'Актерский состав'}</h3>
                <NavLink to={`/Movies/movie/${movieId}/cast`} className={styles.seeAll}>{selectedLanguage === 'en' ? 'See All' : 'Смотреть все'}</NavLink>
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
                        navigation
                    >
                        {filteredMoviecast.map((actor) => (
                            <SwiperSlide>
                                <CastCard actor={actor} />
                            </SwiperSlide>
                        ))}
                    </Swiper>)
                    : (<p className={styles.noMovies}>{selectedLanguage === 'en' ? 'Cast not found' : 'Актерский состав не найдено'}</p>)
            }
        </section>
    );
};

export default MovieCastSlider;