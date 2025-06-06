import { useEffect } from 'react'
import { ContactUs, Features, Header, RecentlyUpdated, SelectPlan } from '../../components'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { actorsThunk, latestMoviesThunk, popularMoviesThunk, tvSeriesThunk } from '../../store/slices'
import { translations } from '../../translations/translations'
import styles from './HomePage.module.css'

const HomePage = () => {
  const dispatch = useAppDispatch()
  const { selectedLanguage } = useAppSelector((state) => state.languagesData)
  const t = translations[selectedLanguage].features

  useEffect(() => {
    dispatch(latestMoviesThunk({ page: 1, selectedLanguage }))
    dispatch(popularMoviesThunk({ page: 1, selectedLanguage }))
    dispatch(tvSeriesThunk({ page: 1, selectedLanguage }))
    dispatch(actorsThunk({ page: 1, selectedLanguage }))
  }, [selectedLanguage])

  return (
    <section>
      <Header />
      <RecentlyUpdated />
      <section className={styles.featuresSec}>
        <h2>{t.featureTitle}</h2>
        <Features />
      </section>
      <SelectPlan />
      <ContactUs />
    </section>
  )
}

export default HomePage