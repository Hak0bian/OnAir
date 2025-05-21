import { NavLink } from 'react-router-dom';
import { LibraryButton, MainButton, Rating } from '../..'
import { useAppSelector } from '../../../store/hooks/hooks';
import { IMoviesType } from '../../../types'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
SwiperCore.use([Autoplay]);
import styles from './MoviesPageSlider.module.css'


const MoviesPageSlider = ({ movies }: { movies: IMoviesType[] }) => {
  const { selectedLanguage } = useAppSelector((state) => state.languagesData)

  return (
    <section>
      <div className={styles.moviesSlideDiv}>
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className={styles.moviesSlide}>
                <img src={`https://image.tmdb.org/t/p/w400${movie?.poster_path}`} alt={movie?.title} />
                <div>
                  <h2>{movie?.title}</h2>
                  <Rating value={movie.vote_average} type="vote" />
                  <p>{movie?.overview}</p>

                  <div className={styles.buttonsDiv}>
                    <NavLink to={`/Movies/movie/${movie?.id}`}>
                      <MainButton text={selectedLanguage === 'en' ? 'More Details' : 'Подробнее'} />
                    </NavLink>
                    <LibraryButton movie={movie} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default MoviesPageSlider