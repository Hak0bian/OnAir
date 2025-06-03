import { useAppSelector } from '../../../store/hooks/hooks';
import { translations } from '../../../translations/translations';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
SwiperCore.use([Autoplay, Pagination]);
import CastCard from '../../Movies/CastCard/CastCard';


const TvSeriaCastSlider = () => {
    const { selectedSeria } = useAppSelector((state => state.tvSeriesData))
    const { selectedLanguage } = useAppSelector((state => state.languagesData))
    const t = translations[selectedLanguage]
    const filteredSeriacast = selectedSeria?.credits?.cast.slice(0, 12);

    return (
        <section>
            {
                filteredSeriacast && filteredSeriacast.length > 0
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
                        {filteredSeriacast.map((actor) => (
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

export default TvSeriaCastSlider;