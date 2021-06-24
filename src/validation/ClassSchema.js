import * as yup from 'yup'

export default yup.object().shape({
    name: yup
    .string("name string")
    .required("A class name is required."),
    start_time: yup
    .string("time string")
    .required("Time is required."),
    duration: yup
    .number("duration in minutes")
    .required("Duration is required."),
    type: yup
    .string("type string")
    .required("Exercise Type is required."),
    level: yup
    .string("intensity string")
    .required("Intensity is required."),
    location: yup
    .string("location string")
    .required("Location is required."),
})