import axios from "axios";
import { IMoviesReturnType, IMoviesType, IMovieVideosReturnType, IPropsType } from "../types";
import { IActorsReturnType, IGenresReturnType, IlanguagesType, IMovieCreditsType, ISelectedActorType } from "../store/slices/sliceTypes/stateTypes";
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
    getMovieCrew(movieId: number){
        return instance.get<IMovieCreditsType>(`/movie/${movieId}/credits`)
    },
    getMovieVideos(id: number){
        return instance.get<IMovieVideosReturnType>(`/movie/${id}/videos`)
    },
    getGenres(selectedLanguage: string){
        return instance.get<IGenresReturnType>(`/genre/movie/list?language=${selectedLanguage}`)
    },
    getMoviesByGenre({genreId, page, selectedLanguage} : IPropsType){
        return instance.get<IMoviesReturnType>(`/discover/movie?include_adult=false&language=${selectedLanguage}&with_genres=${genreId}&page=${page}`)
    },
    searchMovie(text: string){
        return instance.get<IMoviesReturnType>(`search/movie?query=${text}`)
    },
    getLanguages(){
        return instance.get<IlanguagesType[]>(`/configuration/languages`)
    },
    getActors({page, selectedLanguage}: IPropsType){
        return instance.get<IActorsReturnType>(`/person/popular?language=${selectedLanguage}&page=${page}`)
    },
    getActorById(id: number){
        return instance.get<ISelectedActorType>(`/person/${id}`)
    },
    getActorKnownFor(id: number){
        return instance.get(`/person/${id}/movie_credits`)
    },
    searchActor(text: string){
        return instance.get<IActorsReturnType>(`/search/person?query=${text}`)
    }
}