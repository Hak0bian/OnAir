import { NavLink } from 'react-router-dom';
import { LibraryButton, MainButton } from '../..'
import { useAppSelector } from '../../../store/hooks/hooks';
import { translations } from '../../../translations/translations';
import { IMoviesType } from '../../../types'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
SwiperCore.use([Autoplay]);
import GradeIcon from '@mui/icons-material/Grade';
import styles from './MoviesPageSlider.module.css'


const MoviesPageSlider = ({ movies }: { movies: IMoviesType[] }) => {
  const { selectedLanguage } = useAppSelector((state) => state.languagesData)
  const t = translations[selectedLanguage]

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
                  <p className={styles.rating}>
                    <GradeIcon sx={{ fontSize: '18px', color: '#E13C52' }} />
                    {movie?.vote_average.toFixed(1)}
                  </p>
                  <p className={styles.owerview}>{movie?.overview}</p>

                  <div className={styles.buttonsDiv}>
                    <NavLink to={`/Movies/movie/${movie?.id}`}>
                      <MainButton text={t.moreDetailsBtn} />
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