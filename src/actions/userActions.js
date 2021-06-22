export const USER_DELETE = "USER_DELETE";
export const USER_EDIT = "USER_EDIT";
export const USER_LOADING = "USER_LOADING";
export const USER_SET = "USER_SET";

const defaultUser = {
    name: "Daniel LaRouso",
    role: "Instructor",
    skip: true
}

const loadUser = () => {
    return ({type: USER_SET, payload: defaultUser})
}

export {
    loadUser
}