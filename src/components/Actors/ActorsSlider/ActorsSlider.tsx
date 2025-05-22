import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks/hooks';
import { translations } from '../../../translations/translations';
import { IActorType } from '../../../store/slices/sliceTypes/stateTypes';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
SwiperCore.use([Autoplay, Navigation]);
import ActorCard from '../ActorCard/ActorCard';
import styles from './ActorsSlider.module.css';

const ActorsSlider = ({ actors }: { actors: IActorType[] }) => {
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)
    const t = translations[selectedLanguage].slider

    return (
        <section className={styles.slideSection}>
            <div className={styles.slideTopDiv}>
                <h2 className={styles.slideTitle}>{t.actorTitle}</h2>
                <NavLink to={`/Actors/page/1`} className={styles.seeAll}>{t.seeAll}</NavLink>
            </div>
            {
                actors.length > 0
                ? (
                    <Swiper
                        spaceBetween={16}
                        slidesPerView={6}
                        loop={true}
                        autoplay={{ delay: 2000 }}
                        breakpoints={{
                            340: { slidesPerView: 1 },
                            440: { slidesPerView: 2 },
                            640: { slidesPerView: 3 },
                            840: { slidesPerView: 4 },
                            1040: { slidesPerView: 5 },
                            1240: { slidesPerView: 6 }
                        }}
                        navigation
                    >
                        {actors.map((actor) => (
                            <SwiperSlide key={actor.id}>
                                <ActorCard actor={actor} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ): (<p className={styles.noMovies}>Actors not found</p>)
            }
        </section>
    );
};

export default ActorsSlider;