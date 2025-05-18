import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks"
import { moviesThunk, changeMoviesPageNumber, genresListThunk, moviesByGenreThunk, clearmoviesByGenre } from "../../store/slices"
import { MovieCard, MoviesPageSlider, Paginationn, SearchMovie, SelectGenre } from "../../components"
import { Box } from "@mui/material"

const MoviesPage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { movies, page, totalPages } = useAppSelector((state) => state.moviesData)
  const { selectedGenreId, moviesByGenre } = useAppSelector((state) => state.genresData);
  const { selectedLanguage } = useAppSelector((state) => state.languagesData);

  useEffect(() => {
    dispatch(genresListThunk(selectedLanguage));
  }, [selectedLanguage]);

  useEffect(() => {
    if (selectedGenreId > 1) {
      dispatch(moviesByGenreThunk({ genreId: selectedGenreId, page, selectedLanguage }));
    } else if (selectedGenreId === 1) {
      dispatch(moviesThunk({ page, selectedLanguage }));
      dispatch(clearmoviesByGenre())
    }
    dispatch(moviesThunk({ page, selectedLanguage }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page, selectedGenreId]);


  const handleChangePage = (newPage: number) => {
    if (newPage !== page) {
      dispatch(changeMoviesPageNumber(newPage))
      navigate(`/Movies/page/${newPage}`)
    }
  }

  return (
    <section>
        {
          moviesByGenre.length > 0
          ? <MoviesPageSlider movies={moviesByGenre} />
          : <MoviesPageSlider movies={movies} />
        }
      <div className='container'>
        <div style={{ display: 'flex', gap: '24px', padding: '28px 0'}}>
          <SelectGenre />
          <SearchMovie />
        </div>

        <Box sx={{ display: 'grid', gap: 2, justifyContent: 'center', 
          gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
              xl: 'repeat(5, 1fr)',
            }
          }}
        >
          {
            moviesByGenre.length > 0
            ? (moviesByGenre.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              )))
            : (movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              )))
          }
        </Box>
        <Paginationn page={page} totalPages={totalPages} handleChangePage={handleChangePage} />
      </div>
    </section>
  )
}

export default MoviesPage