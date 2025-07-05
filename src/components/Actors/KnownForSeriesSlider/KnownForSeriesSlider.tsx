import { useAppSelector } from '../../../store/hooks/hooks'
import { translations } from '../../../translations/translations';
import TvSeriesCard from '../../TvSeries/TvSeriesCard/TvSeriesCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
SwiperCore.use([Autoplay, Pagination]);
import 'swiper/swiper-bundle.min.css';


const KnownForSeriesSlider = () => {
    const { selectedActor } = useAppSelector((state => state.actorsData))
    const { selectedLanguage } = useAppSelector((state => state.languagesData))
    const t = translations[selectedLanguage].actors

    return (
        <div>
            {
                selectedActor?.known_for_series && selectedActor?.known_for_series?.length > 0
                ? (<Swiper
                    spaceBetween={16}
                    slidesPerView={2}
                    loop={selectedActor?.known_for_series?.length > 6}
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
                    {selectedActor?.known_for_series && (
                        (selectedActor?.known_for_series.length > 12
                            ? selectedActor?.known_for_series.slice(0, 12)
                            : selectedActor?.known_for_series
                        ).map((seria) => (
                            <SwiperSlide>
                                <TvSeriesCard key={seria?.id} seria={seria} />
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

export default KnownForSeriesSlider