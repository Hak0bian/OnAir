import { latestMoviesThunk, popularMoviesThunk } from "./HomePageSlice/homeMoviesThunk";
import { changeSeeAllPageNumber } from "./HomePageSlice/homeMoviesSlice";
import { setLibrary, addToLibrary, removeFromLibrary, clearLibrary } from "./LibraryPageSlice/librarySlice";
import { genresListThunk, moviesByGenreThunk } from "./MovieGenresSlice/movieGenresThunk";
import { changeSelectedGenreId, clearmoviesByGenre } from "./MovieGenresSlice/movieGenresSlice";
import { moviesThunk, movieByIdThunk, movieCrewThunk, movieVideosThunk } from "./MoviesPageSlice/moviesThunk";
import { changeMoviesPageNumber } from "./MoviesPageSlice/moviesSlice";
import { searchMovieThunk } from "./SearchMovieSlice/searchMovieThunk";
import { clearResults } from "./SearchMovieSlice/searchMovieSlice";
import { languagesThunk } from "./LanguagesSlice/languagesThunk";
import { changeLanguages } from "./LanguagesSlice/languagesSlice";

import { actorsThunk } from "./ActorsPageSlice/actorsThunk";
import { actorFullInfoThunk } from "./ActorsPageSlice/actorsThunk";
import { actorBiographyThunk } from "./ActorsPageSlice/actorsThunk";
import { changeActorsPageNumber } from "./ActorsPageSlice/actorsSlice";
import { searchActorThunk } from "./SearchActorSlice/searchActorThunk";
import { clearActorsResults } from "./SearchActorSlice/searchActorSlice";

export { latestMoviesThunk, popularMoviesThunk, changeSeeAllPageNumber, setLibrary, addToLibrary, removeFromLibrary, clearLibrary, 
    genresListThunk, moviesByGenreThunk, changeSelectedGenreId, clearmoviesByGenre, moviesThunk, movieByIdThunk, movieCrewThunk,
    movieVideosThunk, changeMoviesPageNumber, searchMovieThunk, clearResults, languagesThunk, changeLanguages, 
    actorsThunk, actorFullInfoThunk, actorBiographyThunk, changeActorsPageNumber, searchActorThunk, clearActorsResults
}