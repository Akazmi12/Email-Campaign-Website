import * as yup from 'yup'

export const emailSchema = yup.object().shape({
    emailName: yup
    .string()
    .matches(/^'?\p{L}+(?:[' ]\p{L}+)*'?$/u,"Name must include letters and numbers")
    .required('Name field cannot be empty!')
    
})
