import { useAppSelector } from '../../../store/hooks/hooks';
import { MovieCard, Rating } from '../../../components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
SwiperCore.use([Autoplay]);
import styles from './ActorDetails.module.css'

const ActorDetails = () => {
    const { selectedActor, isLoading } = useAppSelector((state => state.actorsData))
    const { selectedLanguage } = useAppSelector((state => state.languagesData))
    if (isLoading) return <h2 className='loading'>Loading...</h2>;
    if (!selectedActor) return <h3 className='notFound'>Actor not found...</h3>;

    return (
        <section className={styles.actorDetailsSec}>
            <div className={styles.actorDetailsDiv}>
                <div className={styles.actorPosterDiv}>
                    <img src={`https://image.tmdb.org/t/p/w500${selectedActor?.profile_path}`} />
                </div>
                <div>
                    <h2 className={styles.actorTitle}>{selectedActor?.name}</h2>
                    <Rating value={selectedActor?.popularity} type="popularity" />
                    <p className={styles.knownAS}>
                        {selectedActor?.also_known_as?.map((names, ind) => (<span key={ind}> {names}, </span>))}
                    </p>
                    <p className={styles.biography}>{selectedActor?.biography.slice(0, 3000)}</p>
                </div>
            </div>

            <div className={styles.knownForBox}>
                <h3 className={styles.secondary}>{selectedLanguage === 'en' ? 'Known For' : 'Известен(а) по'}</h3>
                {
                    selectedActor?.known_for && selectedActor?.known_for?.length > 0 
                    ?   (<Swiper
                            spaceBetween={20}
                            slidesPerView={6}
                            loop={selectedActor?.known_for?.length > 5}
                            autoplay={{ delay: 2000 }}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                440: { slidesPerView: 2 },
                                640: { slidesPerView: 3 },
                                840: { slidesPerView: 4 },
                                1240: { slidesPerView: 6 },
                            }}
                        >
                            {selectedActor?.known_for?.map((movie) => (
                                <SwiperSlide key={movie.id}>
                                    <MovieCard movie={movie} />
                                </SwiperSlide>
                            ))}
                        </Swiper>) 
                    : ( <p className={styles.noKnownFor}>{selectedLanguage === 'en' ? 'No known works for this actor.' : 'Нет известных работ.'}</p>)
                }
            </div>
        </section>
    )
}

export default ActorDetails