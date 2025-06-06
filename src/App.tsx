import { Route, Routes } from 'react-router-dom'
import { FormsPortal, Layout, RedirectToFirstPage } from './components'
import {
  HomePage, MoviesPage, LibraryPage, SeeAllPage, AboutMoviePage, ActorsPage, AboutActorPage,
  SeeAllCastPage, HelpCenterPage, PrivacyPolicyPage, FeaturesPage, ContactUsPage, PricingPlansPage,
  SearchResultsPage, TvSeriesPage,
  AboutTvSeriaPage,
  RecommendationsPage
} from './pages'
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', theme);
  }, []);
  
  return (
    <section>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path='/Movies/page/:pageNum' element={<MoviesPage />} />
          <Route path='/Movies/movie/:id' element={<AboutMoviePage />} />
          <Route path='/Movies/:category' element={<RedirectToFirstPage />} />
          <Route path='/Movies/:category/page/:pageNum' element={<SeeAllPage />} />
          <Route path='/Movies/movie/:movieId/cast' element={<SeeAllCastPage />} />
          <Route path='/Movies/movie/:movieId/recommendations' element={<RecommendationsPage />} />

          <Route path='/TV/page/:pageNum' element={<TvSeriesPage />} />
          <Route path='/TV/Seria/:id' element={<AboutTvSeriaPage />} />
          <Route path='/TV/Seria/:seriaId/cast' element={<SeeAllCastPage />} />
          <Route path='//TV/Seria/:seriaId/recommendations' element={<RecommendationsPage />} />

          <Route path='/Actors/page/:pageNum' element={<ActorsPage />} />
          <Route path='/Actors/actor/:id' element={<AboutActorPage />} />
          <Route path='/Library' element={<LibraryPage />} />
          <Route path='/Help-Center' element={<HelpCenterPage />} />
          <Route path='/Features' element={<FeaturesPage />} />
          <Route path='/Pricing-Plans' element={<PricingPlansPage />} />
          <Route path='/Contact-Us' element={<ContactUsPage />} />
          <Route path='/Privacy-Policy' element={<PrivacyPolicyPage />} />
          <Route path='/Search-Results' element={<SearchResultsPage />} />
        </Route>
      </Routes>
      <FormsPortal />
    </section>
  )
}

export default App
