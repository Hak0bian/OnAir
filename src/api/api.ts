import axios from "axios";
import { IDetailsByIdType, IMoviesReturnType, IPropsType, IPropsTypeToo, ITvSeriesReturnType, ITvSeriesType } from "../types";
import { IActorsReturnType, IGenresReturnType, ISelectedActorType } from "../store/slices/sliceTypes/stateTypes";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const ACCEPT = import.meta.env.VITE_ACCEPT;
const AUTHORIZATION = import.meta.env.VITE_AUTHORIZATION;

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: ACCEPT,
        Authorization: AUTHORIZATION,
    }
})

export const API = {
    getMovies({page, selectedLanguage}: IPropsType){
        return instance.get<IMoviesReturnType>(`/discover/movie?include_adult=false&language=${selectedLanguage}&page=${page}`)
    },
    getMovieById({id, selectedLanguage}: IPropsTypeToo){
        return instance.get<IDetailsByIdType>(`/movie/${id}?language=${selectedLanguage}&append_to_response=videos,credits,images,similar`)
    },
    getGenres(selectedLanguage: string){
        return instance.get<IGenresReturnType>(`/genre/movie/list?language=${selectedLanguage}`)
    },
    getMoviesByGenre({genreId, page, selectedLanguage} : IPropsType){
        return instance.get<IMoviesReturnType>(`/discover/movie?include_adult=false&language=${selectedLanguage}&with_genres=${genreId}&page=${page}`)
    },
    searchMovie(text: string){
        return instance.get<IMoviesReturnType>(`/search/movie?query=${text}`)
    },


    getActors({page, selectedLanguage}: IPropsType){
        return instance.get<IActorsReturnType>(`/person/popular?language=${selectedLanguage}&page=${page}`)
    },
    getActorById({id, selectedLanguage}: IPropsTypeToo){
        return instance.get<ISelectedActorType>(`/person/${id}?language=${selectedLanguage}`)
    },
    getActorKnownForMovies({id, selectedLanguage}: IPropsTypeToo){
        return instance.get(`/person/${id}/movie_credits?language=${selectedLanguage}`)
    },
    getActorKnownForSeries({id, selectedLanguage}: IPropsTypeToo){
        return instance.get(`/person/${id}/tv_credits?language=${selectedLanguage}`)
    },
    searchActor(text: string){
        return instance.get<IActorsReturnType>(`/search/person?query=${text}`)
    },


    getTvSeries({page, selectedLanguage}: IPropsType){
        return instance.get<ITvSeriesType>(`/discover/tv?language=${selectedLanguage}&page=${page}&first_air_date_year=2025`)
    },
    getTvSeriaById({id, selectedLanguage}: IPropsTypeToo){
        return instance.get<IDetailsByIdType>(`/tv/${id}?language=${selectedLanguage}&append_to_response=videos,credits,images,similar`)
    },
    searchTvSeria(text: string){
        return instance.get<ITvSeriesReturnType>(`/search/tv?query=${text}`)
    },
}