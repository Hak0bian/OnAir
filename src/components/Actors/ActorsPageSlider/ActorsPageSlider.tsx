import { NavLink } from 'react-router-dom';
import { MainButton } from '../..'
import { useAppSelector } from '../../../store/hooks/hooks';
import { translations } from '../../../translations/translations';
import { IActorType } from '../../../store/slices/sliceTypes/stateTypes';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
SwiperCore.use([Autoplay]);
import GradeIcon from '@mui/icons-material/Grade';
import styles from './ActorsPageSlider.module.css'


const ActorsPageSlider = ({ actors }: { actors: IActorType[] }) => {
  const { selectedLanguage } = useAppSelector((state) => state.languagesData);
  const t = translations[selectedLanguage]

  return (
    <section>
      <div className={styles.actorsSlideDiv}>
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
        >
          {actors.map((actor) => (
            <SwiperSlide key={actor?.id}>
              <div className={styles.actorsSlide}>
                <img src={`https://image.tmdb.org/t/p/w400${actor?.profile_path}`} />
                <div>
                  <h2>{actor?.name}</h2>
                  <p className={styles.rating}>
                    <GradeIcon sx={{ fontSize: '18px', color: '#E13C52' }} />
                    {actor?.popularity.toFixed(1)}
                  </p>
                  <p className={styles.biography}>
                    {
                      actor.biography
                        ? actor.biography.length > 500
                          ? actor.biography.slice(0, 600) + '...'
                          : actor.biography
                        : t.actors.noBiography
                    }
                  </p>

                  <div className={styles.buttonsDiv}>
                    <NavLink to={`/Actors/actor/${actor?.id}`}>
                      <MainButton text={t.moreDetailsBtn} />
                    </NavLink>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default ActorsPageSlider