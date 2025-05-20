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
    const filteredMoviecast = movieCast.slice(0, 15);

    return (
        <section className={styles.slideSection}>
            <div className={styles.slideTopDiv}>
                <h3 className={styles.slideTitle}>Cast</h3>
                <NavLink to={`/Movies/movie/${movieId}/cast`} className={styles.seeAll}>See All</NavLink>
            </div>
            {
                filteredMoviecast.length > 0
                    ? (<Swiper
                        spaceBetween={20}
                        slidesPerView={5}
                        loop={true}
                        autoplay={{ delay: 2000 }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            480: { slidesPerView: 2 },
                            640: { slidesPerView: 3 },
                            840: { slidesPerView: 4 },
                            1200: { slidesPerView: 5 }
                        }}
                        navigation
                    >
                        {filteredMoviecast.map((actor) => (
                            <SwiperSlide>
                                <CastCard actor={actor} />
                            </SwiperSlide>
                        ))}
                    </Swiper>)
                    : (<p className={styles.noMovies}>Cast not found</p>)
            }
        </section>
    );
};

export default MovieCastSlider;