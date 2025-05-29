import * as YUP from "yup";
import { translations } from "../../../translations/translations";

const contactValidation = (language: string) => {
    const t = translations[language].validation;

    return YUP.object().shape({
        name: YUP
            .string()
            .min(3, t.min)
            .max(15, t.max)
            .required(t.name.req)
            .matches(/^[A-Z][a-z]+$/, t.name.matches),
        email: YUP
            .string()
            .min(3, t.min)
            .matches(/^[a-zA-Z0-9._%+-]+@/, t.email.matches1)
            .matches(/@/, t.email.matches2)
            .matches(/@[a-zA-Z0-9.-]+$/, t.email.matches3)
            .matches(/\.[a-zA-Z]{2,4}$/, t.email.matches4)
            .required(t.email.req),
        subject: YUP
            .string()
            .max(50, t.max50),
        message: YUP
            .string()
            .min(20, t.min20)
            .max(300, t.max300)
            .required(t.message)
    });
};

export default contactValidation;