import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks"
import { moviesThunk, changeMoviesPageNumber, genresListThunk, moviesByGenreThunk, clearmoviesByGenre } from "../../store/slices"
import { Carousel, MovieCard, MoviesFilter, Paginationn, SelectGenre } from "../../components"
import "../../components/global.css"

const MoviesPage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { movies, sortBy, loadingMovies, errorMovies, page, totalPages } = useAppSelector((state) => state.moviesData)
  const { selectedGenreId, moviesByGenre } = useAppSelector((state) => state.genresData);
  const { selectedLanguage } = useAppSelector((state) => state.languagesData);
  const arr = moviesByGenre.length > 0 ? moviesByGenre : movies
  const images = arr.filter(movie => movie?.backdrop_path)
    .map(movie => `https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`);


  useEffect(() => {
    dispatch(genresListThunk(selectedLanguage));
  }, [selectedLanguage]);
  
  useEffect(() => {
    if (selectedGenreId > 1) {
      dispatch(moviesByGenreThunk({ genreId: selectedGenreId, page, selectedLanguage, sortBy }));
    } else if (selectedGenreId === 1) {
      dispatch(moviesThunk({ page, selectedLanguage, sortBy }));
      dispatch(clearmoviesByGenre())
    } else {
      dispatch(moviesThunk({ page, selectedLanguage, sortBy }));
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page, selectedGenreId, selectedLanguage, sortBy]);

  const handleChangePage = (newPage: number) => {
    if (newPage !== page) {
      dispatch(changeMoviesPageNumber(newPage))
      navigate(`/Movies/page/${newPage}`)
    }
  }

  return (
    <section style={{minHeight: '100vh'}}>
      {
        loadingMovies ? (
          <p className='loading'>Loading...</p>
        ) : errorMovies ? (
          <p className='error'>{errorMovies}</p>
        ) : (
          <section>
            <Carousel images={images} />
            <div className='container'>
              <div style={{ display: 'flex', gap: '12px' }}>
                <SelectGenre />
                <MoviesFilter />
              </div>

              <div className='gridDiv'>
                {
                  moviesByGenre.length > 0
                    ? (moviesByGenre.map((movie) => (
                      <MovieCard key={movie.id} movie={movie} />
                    )))
                    : (movies.map((movie) => (
                      <MovieCard key={movie.id} movie={movie} />
                    )))
                }
              </div>
              <Paginationn page={page} totalPages={totalPages} handleChangePage={handleChangePage} />
            </div>
          </section>
        )
      }
    </section>
  )
}

export default MoviesPage