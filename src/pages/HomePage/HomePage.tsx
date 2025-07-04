import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { ContactUs, Features, Header, RecentlyUpdated, SelectPlan } from '../../components'
import { actorsThunk, moviesThunk, tvSeriesThunk } from '../../store/slices'
import { translations } from '../../translations/translations'
import styles from './HomePage.module.css'


const HomePage = () => {
  const dispatch = useAppDispatch()
  const { selectedLanguage } = useAppSelector((state) => state.languagesData)
  const t = translations[selectedLanguage].features

  useEffect(() => {
    dispatch(moviesThunk({ page: 1, selectedLanguage }));
    dispatch(tvSeriesThunk({ page: 1, selectedLanguage }))
    dispatch(actorsThunk({ page: 1, selectedLanguage }))
  }, [selectedLanguage])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [])

  
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