import { ICastType, IGenresType } from "./store/slices/sliceTypes/stateTypes"

export interface IMoviesType {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    origin_country?: string[],
    production_companies?: Array<ICompaniesType>,
    genres?: Array<IGenresType>,
    runtime?: number,
    tagline?: string
}

export interface IMoviesReturnType {
    page: number,
    results: Array<IMoviesType>,
    total_pages: number,
    total_results: number
}

export interface IVideosResultsType {
    id: string
    iso_639_1: string,
    iso_3166_1: string,
    key: string,
    name: string,
    official: boolean,
    published_at: string,
    site: string,
    size: number,
    type: string,
}

export interface IMovieVideosReturnType {
    id: number,
    results: Array<IVideosResultsType>
}

export interface IPropsType {
    genreId?: number,
    page?: number,
    selectedLanguage: string
}

export interface IPropsTypeToo {
    id: number,
    selectedLanguage: string
}

export interface IActorBiography {
    id: number;
    biography: string;
}

type ICompaniesType = {
    id: number,
    logo_path: string,
    name: string,
    origin_country: string
}


// *********************************************


export interface ITvSeriesType {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    first_air_date: string;
    name: string;
    vote_average: number;
    vote_count: number;
}

export interface ITvSeriesReturnType {
    page: number;
    results: ITvSeriesType[];
    total_pages: number;
    total_results: number;
}

export type IImagesType = {
    file_path: string;
    vote_average: number;
    vote_count: number
}

export type ISimilarType = {
    page: number;
    results: Array<ISimilarResultsType>;
    total_pages: number;
    total_results: number;
}

export type ICreatedByType = {
    credit_id: string;
    gender: number;
    id: number;
    name: string;
    original_name: string;
    profile_path: string;
}

export type ISimilarResultsType = {
    adult: boolean;
    backdrop_path: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    name: string;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
}

export type ILastEpisodeType = {
    air_date: string;
    episode_number: number
    episode_type: string
    id: number;
    name: string;
    overview: string;
    runtime: number
    season_number: number
    show_id: number
    still_path: string
    vote_average: number;
    vote_count: number;
}

export interface ITvDetailsResponse {
    id: number;
    adult: boolean;
    name: string;
    original_name: string;
    overview: string;
    poster_path: string | null;
    backdrop_path: string | null;
    genres: Array<IGenresType>;
    number_of_seasons: number;
    number_of_episodes: number;
    vote_average: number;
    vote_count: number;
    first_air_date: string;
    last_air_date: string;
    homepage: string;
    status: string;
    tagline: string;
    language: string;
    original_language: string;
    origin_country: string[];
    popularity: number;
    type: string;
    production_companies: Array<ICompaniesType>
    created_by: Array<ICreatedByType>
    last_episode_to_air: ILastEpisodeType

    videos: {
        results: Array<IVideosResultsType>
    };

    credits: {
        cast: Array<ICastType>;
    };

    images: {
        backdrops: Array<IImagesType>;
        posters: Array<IImagesType>;
        logos: Array<IImagesType>;
    };

    similar: ISimilarType
}