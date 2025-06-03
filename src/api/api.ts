import axios from "axios";
import { IMoviesReturnType, IMoviesType, IMovieVideosReturnType, IPropsType, IPropsTypeToo } from "../types";
import { IActorsReturnType, IGenresReturnType, IMovieCreditsType, ISelectedActorType } from "../store/slices/sliceTypes/stateTypes";

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
    getLatestMovies({page, selectedLanguage}: IPropsType) {
        return instance.get<IMoviesReturnType>(`/discover/movie?include_adult=false&release_date.lte=${today}&language=${selectedLanguage}&page=${page}`)
    },
    getPopularMovies({page, selectedLanguage}: IPropsType) {
        return instance.get<IMoviesReturnType>(`/movie/popular?include_adult=false&language=${selectedLanguage}&page=${page}`)
    },
    getMovies({page, selectedLanguage}: IPropsType){
        return instance.get<IMoviesReturnType>(`/discover/movie?include_adult=false&language=${selectedLanguage}&page=${page}`)
    },
    getMovieById({id, selectedLanguage}: IPropsTypeToo){
        return instance.get<IMoviesType>(`/movie/${id}?language=${selectedLanguage}`)
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
        return instance.get<IMoviesReturnType>(`/search/movie?query=${text}`)
    },


    getActors({page, selectedLanguage}: IPropsType){
        return instance.get<IActorsReturnType>(`/person/popular?language=${selectedLanguage}&page=${page}`)
    },
    getActorById({id, selectedLanguage}: IPropsTypeToo){
        return instance.get<ISelectedActorType>(`/person/${id}?language=${selectedLanguage}`)
    },
    getActorKnownFor({id, selectedLanguage}: IPropsTypeToo){
        return instance.get(`/person/${id}/movie_credits?language=${selectedLanguage}`)
    },
    searchActor(text: string){
        return instance.get<IActorsReturnType>(`/search/person?query=${text}`)
    },


    getTvSeries({page, selectedLanguage}: IPropsType){
        return instance.get(`/discover/tv?language=${selectedLanguage}&page=${page}&first_air_date_year=2025`)
    },
    getTvSeriaById({id, selectedLanguage}: IPropsTypeToo){
        return instance.get(`/tv/${id}?language=${selectedLanguage}&append_to_response=videos,credits,images,similar`)
    }
    
}