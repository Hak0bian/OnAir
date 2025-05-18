import { NavLink } from 'react-router-dom';
import { IMovieSliderPropsType } from '../../componentsTypes/propsTypes';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
SwiperCore.use([Autoplay, Navigation]);
import MovieCard from '../MovieCard/MovieCard';
import styles from './MoviesSlider.module.css';

const MoviesSlider = ({ movies, title }: IMovieSliderPropsType) => {
    const filteredMovies = movies.filter((movie) => movie.poster_path);

    return (
        <section className={styles.slideSection}>
            <div className={styles.slideTopDiv}>
                <h2 className={styles.slideTitle}>{`${title} Movies`}</h2>
                <NavLink to={`/Movies/${title}`} className={styles.seeAll}>See All</NavLink>
            </div>
            {
                filteredMovies.length > 0 
                ?   (<Swiper
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
                        {filteredMovies.map((movie) => (
                            <SwiperSlide key={movie.id}>
                                <MovieCard movie={movie} />
                            </SwiperSlide>
                        ))}
                    </Swiper>) 
                :   (<p className={styles.noMovies}>Movies not found</p>)
            }
        </section>
    );
};

export default MoviesSlider;