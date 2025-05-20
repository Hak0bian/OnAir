import { IMoviesType } from "../../types";

export interface IMovieSliderPropsType {
    movies: Array<IMoviesType>, 
    title: string
}

export interface IMovieTablePropsType {
    selectedMovie: IMoviesType | null
}

export type ISearchPropsType = {
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

export type IPaginationPropsType = {
    page: number, 
    totalPages: number, 
    handleChangePage: (newPage: number) => void
}

export interface IMainButtonPropsType {
    text: string, 
    onClick?: () => void
}

export interface IRatingPropsType {
    value: number;
    type: string;
}
