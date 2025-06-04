import { IDetailsByIdType, IMoviesType } from "../../types";

export type IMovieSliderPropsType = {
    movies: Array<IMoviesType>, 
    title: string
}

export type IMovieTablePropsType = {
    selectedMovie: IDetailsByIdType | null
}

export type ISearchPropsType = {
    showResults: boolean;
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

export type IPaginationPropsType = {
    page: number, 
    totalPages: number, 
    handleChangePage: (newPage: number) => void
}

export type IMainButtonPropsType = {
    text: string, 
    onClick?: () => void
}

export type IRatingPropsType = {
    value: number;
    type: string;
}

export type ISignInFormPropsType = {
    handleOpenSignUp: () => void;
    handleOpenSignIn: () => void;
}

export type ITvSeriaTablePropsType = {
    selectedSeria: IDetailsByIdType | null
}

export type IMovieCardPropsType = {
    movie: IDetailsByIdType | IMoviesType
}
