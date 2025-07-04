import * as YUP from 'yup'
import { translations } from '../../../translations/translations'

const registerValidation = (language: string) => {
    const t = translations[language].validation

    return YUP.object().shape({
        name : YUP
            .string()
            .min(3, t.min)
            .max(15, t.max)
            .required(t.name.req)
            .matches(/^[A-Z][a-z]+$/, t.name.matches),
        lastName : YUP
            .string()
            .min(3, t.min)
            .max(20, t.max)
            .required(t.lastname.req)
            .matches(/^[A-Z][a-z]+$/, t.lastname.matches),
        email : YUP
            .string()
            .min(3, t.min)
            .matches(/^[a-zA-Z0-9._%+-]+@/, t.email.matches1)
            .matches(/@/, t.email.matches2)
            .matches(/@[a-zA-Z0-9.-]+$/, t.email.matches3) 
            .matches(/\.[a-zA-Z]{2,4}$/, t.email.matches4)
            .required(t.email.req),
        pass : YUP
            .string()
            .min(3, t.min)
            .max(20, t.max)
            .required(t.pass.req)
            .matches(/[A-Z]/, t.pass.matches1)
            .matches(/[a-z]/, t.pass.matches2)
            .matches(/\d/, t.pass.matches3),
    })
}

export default registerValidation