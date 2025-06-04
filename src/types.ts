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
    genres?: { id: number; name: string }[];
    runtime?: number,
    tagline?: string
}

export interface IMoviesReturnType {
    page: number,
    results: Array<IMoviesType>,
    total_pages: number,
    total_results: number
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


// ******************************************


type ICompaniesType = {
    id: number,
    logo_path: string,
    name: string,
    origin_country: string
}

type ISeasonType = {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string | null;
    season_number: number;
}

type ICollectionType = {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
}

type ICreatedByType = {
    id: number;
    name: string;
}

export type IVideosResultsType = {
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

export type ICastType = {
    id: number;
    name: string;
    popularity: number;
    profile_path: string | null;
    known_for_department: string;
}

type IImagesType = {
    file_path: string;
    vote_average: number;
    vote_count: number
}

export type ISimilarResultsType = {
    adult: boolean;
    title?: string;
    backdrop_path: string;
    id: number;
    genre_ids: number[];
    original_language: string;
    overview: string;
    popularity: number;
    release_date?: string;
    first_air_date: string;
    poster_path: string;
    name: string;
    origin_country: string[];
    original_name: string;
    vote_average: number;
    vote_count: number;
}

type ISimilarType = {
    page: number;
    results: Array<ISimilarResultsType>;
    total_pages: number;
    total_results: number;
}

type ILastEpisodeType = {
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


export interface IDetailsByIdType {
    id: number;
    title?: string; // movie
    name?: string;  // tv
    original_title?: string; // movie
    original_name?: string; // tv
    origin_country?: string[]; // movie
    release_date?: string; // movie
    created_by?: ICreatedByType[] // tv
    runtime?: number; // movie
    first_air_date?: string; // tv
    episode_run_time?: number[]; // tv
    overview: string;
    poster_path: string | null;
    backdrop_path: string | null;
    genres: { id: number; name: string }[];
    vote_average: number;
    vote_count: number;
    status: string;
    type: string;
    tagline: string;
    popularity: number;
    original_language: string;
    homepage: string | null;
    spoken_languages: { iso_639_1: string; name: string }[];
    production_countries: { iso_3166_1: string; name: string }[];
    production_companies: ICompaniesType[];
    number_of_seasons?: number;
    number_of_episodes?: number;
    seasons?: ISeasonType[];
    imdb_id?: string | null;
    belongs_to_collection?: null | ICollectionType;
    last_episode_to_air: ILastEpisodeType;
    last_air_date: string;

    videos: {
        results: IVideosResultsType[];
    };
    credits: {
        cast: ICastType[];
    };
    images: {
        backdrops: IImagesType[];
        posters: IImagesType[];
        logos: IImagesType[];
    };
    similar: ISimilarType
}


// *****************************************


export interface ITvSeriesReturnType {
    page: number;
    results: ITvSeriesType[];
    total_pages: number;
    total_results: number;
}


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