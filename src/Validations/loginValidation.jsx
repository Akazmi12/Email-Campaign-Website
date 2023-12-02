import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    email: yup.string().email('Entered email is incorrect!').required('Email field can\'t be empty!'),
    password: yup
    .string()
    .min(5,'Password must be at last 5 characters!')
    .max(25, 'Password must be at most 25 characters!')
    .matches(/[0-9]/, "Password must contain at least one digit")
    .matches(/[a-z]/, "Password must contain at least one lowercase")
    .matches(/[A-Z]/, "Password must contain at least one uppercase")
    .required('Password field can\'t be empty!')
    // .matches(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //     "Passoword must contain at least one uppercase, a lowercase, a number and a special character"
    //   )
})
