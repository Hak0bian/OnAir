import { useAppSelector } from '../../../store/hooks/hooks';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
SwiperCore.use([Autoplay, Pagination]);
import 'swiper/swiper-bundle.min.css';
import MovieSimilarCard from '../MovieSimilarCard/MovieSimilarCard';


const MoviesSimilarSlider = () => {
    const { selectedMovie } = useAppSelector((state) => state.moviesData)
    const recSeries = selectedMovie?.similar?.results?.slice(0, 12)
    
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
                        recSeries && recSeries.map((movie) => (
                            <SwiperSlide key={movie.id}>
                                <MovieSimilarCard movie={movie}/>
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

export default MoviesSimilarSlider