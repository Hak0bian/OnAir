import axios from "axios";
import { IMoviesReturnType, IMoviesType, IMovieVideosReturnType, IPropsType } from "../types";
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
    getLatestMovies({page, selectedLanguage}: IPropsType) {
        return instance.get<IMoviesReturnType>(`/discover/movie?include_adult=false&sort_by=release_date.desc&language=${selectedLanguage}&page=${page}`)
    },
    getPopularMovies({page, selectedLanguage}: IPropsType) {
        return instance.get<IMoviesReturnType>(`/movie/popular?include_adult=false&language=${selectedLanguage}&page=${page}`)
    },
    getMovies({page, selectedLanguage}: IPropsType){
        return instance.get<IMoviesReturnType>(`/discover/movie?include_adult=false&language=${selectedLanguage}&page=${page}`)
    },
    getMovieById(id: number){
        return instance.get<IMoviesType>(`/movie/${id}`)
    },
    getMovieVideos(id: number){
        return instance.get<IMovieVideosReturnType>(`/movie/${id}/videos`)
    },
    getGenres(selectedLanguage: string){
        return instance.get(`/genre/movie/list?language=${selectedLanguage}`)
    },
    getMoviesByGenre({genreId, page, selectedLanguage} : IPropsType){
        return instance.get(`/discover/movie?include_adult=false&language=${selectedLanguage}&with_genres=${genreId}&page=${page}`)
    },
    searchMovie(text: string){
        return instance.get(`search/movie?query=${text}`)
    },
    getLanguages(){
        return instance.get(`/configuration/languages`)
    },
    getActors({page, selectedLanguage}: IPropsType){
        return instance.get(`/person/popular?language=${selectedLanguage}&page=${page}`)
    },
    getActorById(id: number){
        return instance.get(`/person/${id}`)
    },
    getActorKnownFor(id: number){
        return instance.get(`/person/${id}/movie_credits`)
    },
    searchActor(text: string){
        return instance.get(`/search/person?query=${text}`)
    }
}

// /movie/{movie_id}/credits