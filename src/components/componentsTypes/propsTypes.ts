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

export interface IRegisterFormPropsType {
    openSignUpForm: boolean; 
    handleCloseSignUp: () => void;
    handleOpenSignUp: () => void;
}

export interface ISignInFormPropsType {
    openSignIn: boolean;
    handleCloseSignIn: () => void;
    handleOpenSignUp: () => void;
    handleOpenSignIn: () => void;
}

export interface IForgotPassFormPropsType {
    openForgot: boolean;
    handleCloseForgot: () => void;
    handleOpenSignIn: () => void;
}

export interface ISelectPlanFormPromsType {
    openSelectPlan: boolean;
    handleCloseSelectPlan: () => void;
}