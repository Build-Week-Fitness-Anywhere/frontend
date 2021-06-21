import * as yup from 'yup'

export default yup.object().shape({
    username: yup
    .string()
    .required("Username is required.")
    .min(6, "Username must be at least 6 characters long."),
    password: yup
    .string()
    .required("Password is required.")
    .min(6, "Password must be at least 6 characters long."),
    role: yup
    .string()
    .required("Role is Required")
})