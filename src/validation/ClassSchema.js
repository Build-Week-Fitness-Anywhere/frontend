import * as yup from 'yup'

export default yup.object().shape({
    name: yup
    .string()
    .required("A class name is required."),
    date: yup
    .string()
    .required("Date is required."),
    time: yup
    .string()
    .required("Time is required."),
    duration: yup
    .string()
    .required("Duration is required."),
    instructor: yup
    .string()
    .required("Instructor is required."),
    type: yup
    .string()
    .required("Exercise Type is required."),
    intensity: yup
    .string()
    .required("Intensity is required."),
    location: yup
    .string()
    .required("Location is required."),
})