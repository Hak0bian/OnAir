import { Route, Routes } from 'react-router-dom'
import { Layout, RedirectToFirstPage } from './components'
import { HomePage, MoviesPage, LibraryPage, SeeAllPage, AboutMoviePage, ActorsPage, AboutActorPage, SeeAllCastPage } from './pages'
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
          <Route path='/Actors/page/:pageNum' element={<ActorsPage />} />
          <Route path='/Actors/actor/:id' element={<AboutActorPage />} />
          <Route path='/Library' element={<LibraryPage />} />
          <Route path='/Movies/:category/page/:pageNum' element={<SeeAllPage />} />
          <Route path='/Movies/movie/:movieId/cast' element={<SeeAllCastPage />} />
        </Route>
      </Routes>
    </section>
  )
}

export default App
