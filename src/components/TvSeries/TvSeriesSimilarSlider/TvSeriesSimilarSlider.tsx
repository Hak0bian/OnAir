import TvSeriesCard from '../TvSeriesCard/TvSeriesCard';
import { useAppSelector } from '../../../store/hooks/hooks';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
SwiperCore.use([Autoplay, Pagination]);
import 'swiper/swiper-bundle.min.css';


const TvSeriesSimilarSlider = () => {
    const { selectedSeria } = useAppSelector((state) => state.tvSeriesData)
    const recSeries = selectedSeria?.similar?.results?.slice(0, 12)

    return (
        <div>
            {
                recSeries && recSeries.length > 0
                ? (<Swiper
                    spaceBetween={20}
                    slidesPerView={6}
                    loop={recSeries.length > 8}
                    autoplay={{ delay: 2000 }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        440: { slidesPerView: 2 },
                        640: { slidesPerView: 3 },
                        840: { slidesPerView: 4 },
                        1240: { slidesPerView: 6 },
                    }}
                    pagination={{
                        el: `.swiper-pagination-knownFor`,
                        clickable: true,
                        dynamicBullets: false,
                        type: 'bullets',
                    }}
                >
                    {
                        recSeries && recSeries.map((seria) => (
                            <SwiperSlide key={seria.id}>
                                <TvSeriesCard seria={seria}/>
                            </SwiperSlide>
                        ))
                    }

                    <div className='swiper-pagination-knownFor'></div>
                </Swiper>)
                : (<p>No recommendations series</p>)
            }
        </div>
    )
}

export default TvSeriesSimilarSlider