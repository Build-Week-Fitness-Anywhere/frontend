import axios from "axios";

const IGNORE_EVENT = "IGNORE_EVENT";
export const USER_DELETE = "USER_DELETE";
export const USER_EDIT = "USER_EDIT";
export const USER_LOADING = "USER_LOADING";
export const USER_SET = "USER_SET";

const defaultUser = {
    username: "",
    password: "",
}

const loadUser = (user = defaultUser) => {
    return ((dispatch) => {
        axios.post("https://fittnesslambda.herokuapp.com/api/auth/login", user)
            .then((resp) => {
                const data = resp.data;
                const neoUser = {
                    username: user.username,
                    role: data.role
                }
                localStorage.setItem("token", data.token)
                dispatch({type: USER_SET, payload: neoUser});
            }).catch((err) => alert(err));
    })
}

const logout = () => {
    return ((dispatch) => {
        dispatch({type: USER_SET, defaultUser});
        localStorage.removeItem("token");
    })
}

const saveUser = (data) => {
    return ((dispatch) => {

        axios.post("https://fittnesslambda.herokuapp.com/api/auth/register", data)
            .then((resp) => {
                dispatch({type: IGNORE_EVENT, payload: resp.data})
            }).catch((err) => alert(err));
    })
}

export {
    loadUser,
    logout,
    saveUser
}