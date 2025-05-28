import { useEffect } from 'react'
import { ActorsSlider, Features, Header, MoviesSlider, SelectPlan } from '../../components'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { actorsThunk, latestMoviesThunk, popularMoviesThunk } from '../../store/slices'
import { translations } from '../../translations/translations'
import '../../components/global.css'

const HomePage = () => {
  const dispatch = useAppDispatch()
  const { latestMovies, popularMovies, page } = useAppSelector((state) => state.homeMovies)
  const { selectedLanguage } = useAppSelector((state) => state.languagesData)
  const t = translations[selectedLanguage].features
  const { actors} = useAppSelector((state) => state.actorsData)

  useEffect(() => {
    dispatch(latestMoviesThunk({ page, selectedLanguage }))
    dispatch(popularMoviesThunk({ page, selectedLanguage }))
    dispatch(actorsThunk({ page, selectedLanguage }))
  }, [selectedLanguage])

  return (
    <section>
      <Header />
      <MoviesSlider movies={latestMovies} title={'Latest'} />
      <MoviesSlider movies={popularMovies} title={'Popular'} />
      <ActorsSlider actors={actors} />
      <section className='featuresSec'>
        <h2>{t.featureTitle}</h2>
        <Features />
      </section>
      <SelectPlan />
    </section>
  )
}

export default HomePage