import { NavLink } from 'react-router-dom';
import { IMoviesType } from '../../../types'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
SwiperCore.use([Autoplay, Pagination]);
import styles from './MoviesPageSlider.module.css'
import '../../global.css';


const MoviesPageSlider = ({movies}: {movies: IMoviesType[]}) => {
  return (
    <Swiper
      slidesPerView={5}
      centeredSlides={true}
      loop={true}
      pagination={{ clickable: true }}
      onSlideChange={(swiper: any) => {
        const slides = swiper.slides;
        if (!slides || !slides.length) return;
        
        slides.forEach((slide: any) => slide.classList.remove('prev-slide', 'next-slide', 'far-prev', 'far-next'));
        const active = swiper.activeIndex;
        const total = slides.length;

        const mod = (i: any) => (i + total) % total;
        slides[mod(active - 1)].classList.add('prev-slide');
        slides[mod(active + 1)].classList.add('next-slide');
        slides[mod(active - 2)].classList.add('far-prev');
        slides[mod(active + 2)].classList.add('far-next');
      }}
      onSwiper={(swiper: any) => swiper.emit('slideChange')}
      className="custom-carousel"
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <NavLink to={`/Movies/movie/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w400${movie?.poster_path}`} className={styles.slideImg}/>
          </NavLink>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MoviesPageSlider