import axios from "axios";
import { IDetailsByIdType, IMoviesReturnType, IPropsType, IPropsTypeToo, ITvSeriesReturnType } from "../types";
import { IActorsReturnType, IGenresReturnType, ISelectedActorType } from "../store/slices/sliceTypes/stateTypes";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const ACCEPT = import.meta.env.VITE_ACCEPT;
const AUTHORIZATION = import.meta.env.VITE_AUTHORIZATION;
const today = new Date().toISOString().split('T')[0];

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: ACCEPT,
        Authorization: AUTHORIZATION,
    }
})

export const API = {
    getMovies({page, selectedLanguage, sortBy}: IPropsType){
        return instance.get<IMoviesReturnType>(`/discover/movie?include_adult=false&language=${selectedLanguage}&page=${page}&sort_by=${sortBy}&vote_count.gte=100&primary_release_date.lte=${today}`)
    },
    getMovieById({id, selectedLanguage}: IPropsTypeToo){
        return instance.get<IDetailsByIdType>(`/movie/${id}?include_adult=false&language=${selectedLanguage}&append_to_response=videos,credits,images,similar`)
    },
    getGenres(selectedLanguage: string){
        return instance.get<IGenresReturnType>(`/genre/movie/list?language=${selectedLanguage}`)
    },
    getMoviesByGenre({genreId, page, selectedLanguage, sortBy} : IPropsType){
        return instance.get<IMoviesReturnType>(`/discover/movie?include_adult=false&language=${selectedLanguage}&with_genres=${genreId}&page=${page}&sort_by=${sortBy}&vote_count.gte=100&primary_release_date.lte=${today}`)
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
        return instance.get<ITvSeriesReturnType>(`/discover/tv?include_adult=false&language=${selectedLanguage}&page=${page}&first_air_date_year=2025`)
    },
    getTvSeriaById({id, selectedLanguage}: IPropsTypeToo){
        return instance.get<IDetailsByIdType>(`/tv/${id}?include_adult=false&language=${selectedLanguage}&append_to_response=videos,credits,images,similar`)
    },
    searchTvSeria(text: string){
        return instance.get<ITvSeriesReturnType>(`/search/tv?query=${text}`)
    },
}