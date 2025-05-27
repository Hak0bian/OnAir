import { configureStore } from "@reduxjs/toolkit"
import homeMoviesSlice from "./slices/HomePageSlice/homeMoviesSlice"
import moviesSlice from "./slices/MoviesPageSlice/moviesSlice"
import librarySlice from "./slices/LibraryPageSlice/librarySlice"
import movieGenresSlice from "./slices/MovieGenresSlice/movieGenresSlice"
import searchMovieSlice from "./slices/SearchMovieSlice/searchMovieSlice"
import languagesSlice from "./slices/LanguagesSlice/languagesSlice"
import actorsSlice from "./slices/ActorsPageSlice/actorsSlice"
import searchActorSlice from "./slices/SearchActorSlice/searchActorSlice"
import themeSlice from "./slices/ThemeSlice/themeSlice"

export const store = configureStore({
    reducer: {
        homeMovies: homeMoviesSlice,
        moviesData: moviesSlice,
        libraryData: librarySlice,
        genresData: movieGenresSlice,
        searchedMoviesData: searchMovieSlice,
        languagesData: languagesSlice,
        actorsData: actorsSlice,
        searchedActorsData: searchActorSlice,
        theme: themeSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch