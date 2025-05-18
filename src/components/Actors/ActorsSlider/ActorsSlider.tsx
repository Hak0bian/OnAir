import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
SwiperCore.use([Autoplay, Navigation]);
import { IActorType } from '../../../store/slices/sliceTypes/stateTypes';
import ActorCard from '../ActorCard/ActorCard';
import styles from './ActorsSlider.module.css';

const ActorsSlider = ({ actors }: { actors: IActorType[] }) => {
    return (
        <section className={styles.slideSection}>
            <div className={styles.slideTopDiv}>
                <h2 className={styles.slideTitle}>Popular Actors</h2>
                <NavLink to={`/Actors/page/1`} className={styles.seeAll}>See All</NavLink>
            </div>
            {
                actors.length > 0
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
                        {actors.map((actor) => (
                            <SwiperSlide key={actor.id}>
                                <ActorCard actor={actor} />
                            </SwiperSlide>
                        ))}
                    </Swiper>)
                :   (<p className={styles.noMovies}>Actors not found</p>)
            }
        </section>
    );
};

export default ActorsSlider;