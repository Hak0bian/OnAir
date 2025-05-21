import { IGenresType } from "./store/slices/sliceTypes/stateTypes"

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

export interface IMovieVideosResultsType {
    iso_639_1: string,
    iso_3166_1: string,
    name: string,
    key: string,
    site: string,
    size: number,
    type: string,
    official: number,
    published_at: string,
    id: string
}

export interface IMovieVideosReturnType {
    id: number,
    results: Array<IMovieVideosResultsType>
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