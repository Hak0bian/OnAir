import * as YUP from "yup";
import { translations } from "../../../translations/translations";

const forgotValidation = (language: string) => {
    const t = translations[language].validation;

    return YUP.object().shape({
        email: YUP
            .string()
            .min(3, t.min)
            .matches(/^[a-zA-Z0-9._%+-]+@/, t.email.matches1)
            .matches(/@/, t.email.matches2)
            .matches(/@[a-zA-Z0-9.-]+$/, t.email.matches3)
            .matches(/\.[a-zA-Z]{2,4}$/, t.email.matches4)
            .required(t.email.req),
    });
};

export default forgotValidation;