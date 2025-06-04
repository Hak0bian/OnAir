import { latestMoviesThunk, popularMoviesThunk } from "./HomePageSlice/homeMoviesThunk";
import { changeSeeAllPageNumber } from "./HomePageSlice/homeMoviesSlice";
import { setMovieinLibrary, addMovieToLibrary, removeMovieFromLibrary, setSeriainLibrary, addSeriaToLibrary, 
    removeSeriaFromLibrary, clearLibrary } from "./LibraryPageSlice/librarySlice";
import { genresListThunk, moviesByGenreThunk } from "./MovieGenresSlice/movieGenresThunk";
import { changeLanguages } from "./LanguagesSlice/languagesSlice";
import { setTheme, toggleTheme } from "./ThemeSlice/themeSlice"

import { changeSelectedGenreId, clearmoviesByGenre } from "./MovieGenresSlice/movieGenresSlice";
import { moviesThunk, movieByIdThunk } from "./MoviesPageSlice/moviesThunk";
import { changeMoviesPageNumber } from "./MoviesPageSlice/moviesSlice";
import { searchMovieThunk } from "./SearchMovieSlice/searchMovieThunk";
import { clearMovieResults, handleInputValue } from "./SearchMovieSlice/searchMovieSlice";

import { actorsThunk } from "./ActorsPageSlice/actorsThunk";
import { actorFullInfoThunk } from "./ActorsPageSlice/actorsThunk";
import { actorBiographyThunk } from "./ActorsPageSlice/actorsThunk";
import { changeActorsPageNumber } from "./ActorsPageSlice/actorsSlice";
import { searchActorThunk } from "./SearchActorSlice/searchActorThunk";
import { clearActorsResults } from "./SearchActorSlice/searchActorSlice";

import { tvSeriesThunk } from "./TvSeriesSlice/tvSeriesThunk";
import { changeTvSeriesPageNumber } from "./TvSeriesSlice/tvSeriesSlice";
import { tvSeriaByIdThunk } from "./TvSeriesSlice/tvSeriesThunk";

export { latestMoviesThunk, popularMoviesThunk, changeSeeAllPageNumber, setMovieinLibrary, addMovieToLibrary, 
    removeMovieFromLibrary, setSeriainLibrary, addSeriaToLibrary, removeSeriaFromLibrary, clearLibrary, 
    genresListThunk, moviesByGenreThunk, changeSelectedGenreId, clearmoviesByGenre, moviesThunk, movieByIdThunk, 
    changeMoviesPageNumber, searchMovieThunk, clearMovieResults, handleInputValue, changeLanguages, setTheme, 
    toggleTheme, actorsThunk, actorFullInfoThunk, actorBiographyThunk, changeActorsPageNumber, searchActorThunk, clearActorsResults,
    tvSeriesThunk, changeTvSeriesPageNumber, tvSeriaByIdThunk
}