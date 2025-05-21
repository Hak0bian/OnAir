import { IMoviesType, IMovieVideosResultsType } from "../../../types";

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
    movieVideos: Array<IMovieVideosResultsType>,
    selectedMovie: IMoviesType | null,
    movieCast: Array<ICastAndCrewType>,
    page: number,
    totalPages: number,
    isLoading: boolean,
    error: null | string
}

// *********************************************

export interface ICastAndCrewType {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    cast_id: number;
    credit_id: string;
    character?: string;
    order?: number;
    job?: string;
    department?: string;
}

export interface IMovieCreditsType {
    id: number;
    cast: Array<ICastAndCrewType>;
    crew: Array<ICastAndCrewType>;
}

// *********************************************

export interface IGenresType {
    id: number, 
    name: string
}

export interface IMovieGenresStateType {
    genres: Array<IGenresType>,
    moviesByGenre: Array<IMoviesType>,
    isLoading: boolean,
    selectedGenreId: number,
    error: null | string
}

export interface IGenresReturnType {
    genres: Array<IGenresType>
}

export type ILibraryStateType = {
    library: Array<IMoviesType>;
}

// *********************************************

export interface ISearchMoviesStateType {
    searchedMovies: Array<IMoviesType>,
    isLoading: boolean,
    notFound: null | string,
    error: null | string
}

export interface ISearchActorsStateType {
    searchedActors: Array<IActorType>,
    isLoading: boolean,
    notFound: null | string,
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
    known_for?: Array<IMoviesType>;
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