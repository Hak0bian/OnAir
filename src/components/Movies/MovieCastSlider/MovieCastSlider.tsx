import { useAppSelector } from '../../../store/hooks/hooks';
import { translations } from '../../../translations/translations';
import CastCard from '../CastCard/CastCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
SwiperCore.use([Autoplay, Pagination]);
import 'swiper/swiper-bundle.min.css';


const MovieCastSlider = () => {
    const { selectedMovie } = useAppSelector((state => state.moviesData))
    const { selectedLanguage } = useAppSelector((state => state.languagesData))
    const t = translations[selectedLanguage]
    const filteredMoviecast = selectedMovie?.credits?.cast.slice(0, 12);

    return (
        <section>
            {
                filteredMoviecast && filteredMoviecast.length > 0
                    ? (<Swiper
                        spaceBetween={16}
                        slidesPerView={2}
                        loop={filteredMoviecast.length > 6}
                        autoplay={{ delay: 2000 }}
                        breakpoints={{
                            340: { slidesPerView: 2 },
                            540: { slidesPerView: 3 },
                            740: { slidesPerView: 4 },
                            1040: { slidesPerView: 6 }
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
                    : (<p>{t.movies.castNotFound}</p>)
            }
        </section>
    );
};

export default MovieCastSlider;