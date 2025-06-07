import { IDetailsByIdType, IMoviesType, ITvSeriesType } from "../../../types";

export interface IHomeMoviesStateType {
    latestMovies: Array<IMoviesType>,
    popularMovies: Array<IMoviesType>,
    popularError: null | string,
    latestError: null | string,
    isLatestLoading: boolean,
    isPopularLoading: boolean,
    isLoading: boolean,
    page: number,
    totalPages: number
}

export interface IMoviesStateType {
    movies: Array<IMoviesType>,
    selectedMovie: IDetailsByIdType | null,
    page: number,
    totalPages: number,
    isLoading: boolean,
    error: null | string
}


// *********************************************

export interface IMovieGenresStateType {
    genres: { id: number; name: string }[];
    moviesByGenre: Array<IMoviesType>,
    isLoading: boolean,
    selectedGenreId: number,
    error: null | string
}

export interface IGenresReturnType {
    genres: { id: number; name: string }[];
}

export type ILibraryStateType = {
    moviesInibrary: Array<IDetailsByIdType>,
    seriesInLibrary: Array<IDetailsByIdType>
}

// *********************************************

export interface ISearchMoviesStateType {
    searchedMovies: Array<IMoviesType>,
    inputValue: string,
    movieIsLoading: boolean,
    movieNotFound: boolean;
    error: null | string
}

export interface ISearchActorsStateType {
    searchedActors: Array<IActorType>,
    actorIsLoading: boolean,
    actorNotFound: boolean,
    error: null | string
}

export interface IԼanguagesStateType {
    selectedLanguage: string,
    isLoading: boolean
}

// *********************************************

export interface IActorType {
    id: number;
    adult: boolean,
    name: string;
    original_name: string,
    gender: number,
    popularity: number,
    profile_path: string | null;
    known_for: Array<IMoviesType>
    known_for_department: string
    biography?: string | undefined
}

export interface ISelectedActorType {
    id: number;
    imdb_id: string,
    name: string;
    biography: string,
    place_of_birth: string,
    birthday: string,
    deathday: string | null
    profile_path: string | null;
    adult: boolean,
    gender: number,
    known_for_department: string
    popularity: number,
    also_known_as: string[],
    homepage: number | null,
    known_for_movies?: Array<IMoviesType>;
    known_for_series?: Array<ITvSeriesType>
}

export type IActorsStateType = {
    actors: Array<IActorType>;
    selectedActor: ISelectedActorType | null;
    page: number;
    totalPages: number,
    isLoading: boolean
    error: null | string
}

export interface IActorsReturnType {
    page: number,
    results: Array<IActorType>
    total_pages: number
    total_results: number
}

export type IThemeStateType = {
    mode: 'light' | 'dark';
}

export type IOpenCloseFormsStateType = {
    signUp: boolean;
    signIn: boolean;
    forgotPass: boolean;
    selectPlan: boolean;
}


// ********************************************


export type ITvSeriesStateType = {
    tvSeries: Array<ITvSeriesType>
    selectedSeria: IDetailsByIdType | null,
    page: number,
    totalPages: number,
    isLoading: boolean
    error: null | string
}


export type ISerachTvSeriesStateType = {
    searchedSeries: Array<ITvSeriesType>,
    inputValue: string,
    seriaIsLoading: boolean,
    seriaNotFound: boolean,
    error: null | string,
}