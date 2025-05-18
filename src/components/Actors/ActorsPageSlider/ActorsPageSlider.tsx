import { NavLink } from 'react-router-dom';
import { MainButton, Rating } from '../..'
import { IActorType } from '../../../store/slices/sliceTypes/stateTypes';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
SwiperCore.use([Autoplay, Navigation, Pagination]);
import styles from './ActorsPageSlider.module.css'


const ActorsPageSlider = ({ actors }: { actors: IActorType[] }) => {
  return (
    <div className={styles.actorsSlideDiv}>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation
      >
        {actors.map((actor) => (
          <SwiperSlide key={actor?.id}>
            <div className={styles.actorsSlide}>
              <img src={`https://image.tmdb.org/t/p/w400${actor?.profile_path}`} />
              <div>
                <h2>{actor?.name}</h2>
                <Rating value={actor?.popularity} type="popularity" />
                <p>
                  {
                    actor.biography
                      ? actor.biography.length > 500
                        ? actor.biography.slice(0, 600) + '...'
                        : actor.biography
                      : "No biography available"
                  }
                </p>

                <div className={styles.buttonsDiv}>
                  <NavLink to={`/Actors/actor/${actor?.id}`}>
                    <MainButton text={'More Details'} />
                  </NavLink>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ActorsPageSlider