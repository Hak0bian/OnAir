import { useAppSelector } from '../../../store/hooks/hooks'
import { translations } from '../../../translations/translations';
import { MovieCard } from '../..';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
SwiperCore.use([Autoplay, Pagination]);
import 'swiper/swiper-bundle.min.css';


const KnownForMoviesSlider = () => {
    const { selectedActor } = useAppSelector((state => state.actorsData))
    const { selectedLanguage } = useAppSelector((state => state.languagesData))
    const t = translations[selectedLanguage].actors

    return (
        <div>
            {
                selectedActor?.known_for_movies && selectedActor?.known_for_movies?.length > 0
                ? (<Swiper
                    spaceBetween={16}
                    slidesPerView={2}
                    loop={selectedActor?.known_for_movies?.length > 6}
                    autoplay={{ delay: 2000 }}
                    breakpoints={{
                        340: { slidesPerView: 2 },
                        540: { slidesPerView: 3 },
                        740: { slidesPerView: 4 },
                        1040: { slidesPerView: 6 }
                    }}
                    pagination={{
                        el: `.swiper-pagination-knownFor`,
                        clickable: true,
                        dynamicBullets: false,
                        type: 'bullets',
                    }}
                >
                    {selectedActor?.known_for_movies && (
                        (selectedActor.known_for_movies.length > 12
                            ? selectedActor.known_for_movies.slice(0, 12)
                            : selectedActor.known_for_movies
                        ).map((movie) => (
                            <SwiperSlide>
                                <MovieCard key={movie.id} movie={movie} />
                            </SwiperSlide>
                        ))
                    )}

                    <div className='swiper-pagination-knownFor'></div>
                </Swiper>)
                : (<p>{t.noKnownFor}</p>)
            }
        </div>
    )
}

export default KnownForMoviesSlider