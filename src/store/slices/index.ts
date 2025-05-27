import { latestMoviesThunk, popularMoviesThunk } from "./HomePageSlice/homeMoviesThunk";
import { changeSeeAllPageNumber } from "./HomePageSlice/homeMoviesSlice";
import { setLibrary, addToLibrary, removeFromLibrary, clearLibrary } from "./LibraryPageSlice/librarySlice";
import { genresListThunk, moviesByGenreThunk } from "./MovieGenresSlice/movieGenresThunk";
import { changeLanguages } from "./LanguagesSlice/languagesSlice";
import { setTheme, toggleTheme } from "./ThemeSlice/themeSlice"

import { changeSelectedGenreId, clearmoviesByGenre } from "./MovieGenresSlice/movieGenresSlice";
import { moviesThunk, movieByIdThunk, movieCrewThunk, movieVideosThunk } from "./MoviesPageSlice/moviesThunk";
import { changeMoviesPageNumber } from "./MoviesPageSlice/moviesSlice";
import { searchMovieThunk } from "./SearchMovieSlice/searchMovieThunk";
import { clearResults } from "./SearchMovieSlice/searchMovieSlice";

import { actorsThunk } from "./ActorsPageSlice/actorsThunk";
import { actorFullInfoThunk } from "./ActorsPageSlice/actorsThunk";
import { actorBiographyThunk } from "./ActorsPageSlice/actorsThunk";
import { changeActorsPageNumber } from "./ActorsPageSlice/actorsSlice";
import { searchActorThunk } from "./SearchActorSlice/searchActorThunk";
import { clearActorsResults } from "./SearchActorSlice/searchActorSlice";

export { latestMoviesThunk, popularMoviesThunk, changeSeeAllPageNumber, setLibrary, addToLibrary, removeFromLibrary, clearLibrary, 
    genresListThunk, moviesByGenreThunk, changeSelectedGenreId, clearmoviesByGenre, moviesThunk, movieByIdThunk, movieCrewThunk,
    movieVideosThunk, changeMoviesPageNumber, searchMovieThunk, clearResults, changeLanguages, setTheme, toggleTheme,
    actorsThunk, actorFullInfoThunk, actorBiographyThunk, changeActorsPageNumber, searchActorThunk, clearActorsResults
}