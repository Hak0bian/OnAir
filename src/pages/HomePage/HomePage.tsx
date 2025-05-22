import { useEffect } from 'react'
import { ActorsSlider, Header, MoviesSlider, SelectPlan } from '../../components'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { actorsThunk, latestMoviesThunk, popularMoviesThunk } from '../../store/slices'

const HomePage = () => {
  const dispatch = useAppDispatch()
  const { latestMovies, popularMovies, page } = useAppSelector((state) => state.homeMovies)
  const { selectedLanguage } = useAppSelector((state) => state.languagesData)
  const { actors} = useAppSelector((state) => state.actorsData)

  useEffect(() => {
    dispatch(latestMoviesThunk({ page, selectedLanguage }))
    dispatch(popularMoviesThunk({ page, selectedLanguage }))
    dispatch(actorsThunk({ page, selectedLanguage }))
  }, [selectedLanguage])

  return (
    <section>
      <Header />
      <MoviesSlider movies={latestMovies} title={'latest'} />
      <MoviesSlider movies={popularMovies} title={'popular'} />
      <ActorsSlider actors={actors} />
      <SelectPlan/>
    </section>
  )
}

export default HomePage