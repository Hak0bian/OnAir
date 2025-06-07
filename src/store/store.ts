import { configureStore } from "@reduxjs/toolkit"
import moviesSlice from "./slices/MoviesPageSlice/moviesSlice"
import librarySlice from "./slices/LibraryPageSlice/librarySlice"
import movieGenresSlice from "./slices/MovieGenresSlice/movieGenresSlice"
import searchMovieSlice from "./slices/SearchMovieSlice/searchMovieSlice"
import languagesSlice from "./slices/LanguagesSlice/languagesSlice"
import actorsSlice from "./slices/ActorsPageSlice/actorsSlice"
import searchActorSlice from "./slices/SearchActorSlice/searchActorSlice"
import themeSlice from "./slices/ThemeSlice/themeSlice"
import openCloseFormsSlice from "./slices/OpenCloseFormsSlice/OpenCloseFormsSlice"
import tvSeriesSlice from "./slices/TvSeriesSlice/tvSeriesSlice"
import searchTvSeriesSlice from "./slices/SearchTvSeriesSlice/SearchTvSeriesSlice"

export const store = configureStore({
    reducer: {
        moviesData: moviesSlice,
        libraryData: librarySlice,
        genresData: movieGenresSlice,
        searchedMoviesData: searchMovieSlice,
        languagesData: languagesSlice,
        actorsData: actorsSlice,
        searchedActorsData: searchActorSlice,
        theme: themeSlice,
        formsData: openCloseFormsSlice,
        tvSeriesData: tvSeriesSlice,
        searchSeriesData: searchTvSeriesSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch