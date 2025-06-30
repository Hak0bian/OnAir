import { setMovieinLibrary, addMovieToLibrary, removeMovieFromLibrary, setSeriainLibrary, addSeriaToLibrary, 
    removeSeriaFromLibrary, clearLibrary } from "./LibraryPageSlice/librarySlice";
import { genresListThunk, moviesByGenreThunk } from "./MovieGenresSlice/movieGenresThunk";
import { changeLanguages } from "./LanguagesSlice/languagesSlice";
import { setTheme, toggleTheme } from "./ThemeSlice/themeSlice"
import { setOpenBurger } from "./BurgerMenuSlice/BurgerMenuSlice";

import { changeSelectedGenreId, clearmoviesByGenre } from "./MovieGenresSlice/movieGenresSlice";
import { moviesThunk, movieByIdThunk } from "./MoviesPageSlice/moviesThunk";
import { changeMoviesPageNumber, changeMoviesSortBy } from "./MoviesPageSlice/moviesSlice";
import { searchMovieThunk } from "./SearchMovieSlice/searchMovieThunk";
import { clearMovieResults } from "./SearchMovieSlice/searchMovieSlice";

import { actorsThunk } from "./ActorsPageSlice/actorsThunk";
import { actorFullInfoThunk } from "./ActorsPageSlice/actorsThunk";
import { changeActorsPageNumber } from "./ActorsPageSlice/actorsSlice";
import { searchActorThunk } from "./SearchActorSlice/searchActorThunk";
import { clearActorsResults } from "./SearchActorSlice/searchActorSlice";

import { tvSeriesThunk } from "./TvSeriesSlice/tvSeriesThunk";
import { changeTvSeriesPageNumber } from "./TvSeriesSlice/tvSeriesSlice";
import { tvSeriaByIdThunk } from "./TvSeriesSlice/tvSeriesThunk";
import { searchTvSeriesThunk } from "./SearchTvSeriesSlice/SearchTvSeriesThunk";
import { clearTvSeriesResults } from "./SearchTvSeriesSlice/SearchTvSeriesSlice";

export { setMovieinLibrary, addMovieToLibrary, 
    removeMovieFromLibrary, setSeriainLibrary, addSeriaToLibrary, removeSeriaFromLibrary, clearLibrary, 
    genresListThunk, moviesByGenreThunk, changeSelectedGenreId, clearmoviesByGenre, moviesThunk, movieByIdThunk, 
    changeMoviesPageNumber, changeMoviesSortBy, searchMovieThunk, clearMovieResults, changeLanguages, setTheme, 
    toggleTheme, actorsThunk, actorFullInfoThunk, changeActorsPageNumber, searchActorThunk, clearActorsResults,
    tvSeriesThunk, searchTvSeriesThunk, changeTvSeriesPageNumber, tvSeriaByIdThunk, clearTvSeriesResults, setOpenBurger
}