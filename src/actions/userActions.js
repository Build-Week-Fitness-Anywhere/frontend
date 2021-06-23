import axios from "axios";
import { useHistory } from 'react-router-dom';

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
        let { push } = useHistory();

        alert(user.username + " " + user.password);
        axios.post("https://fittnesslambda.herokuapp.com/api/auth/login", user)
            .then((resp) => {
                alert(resp.data);
                const data = resp.data;
                const neoUser = {
                    username: data.username,
                    role: data.role
                }
                localStorage.setItem("token", data.payload)
                dispatch({type: USER_SET, payload: neoUser});
                push("/dashboard");
            }).catch((err) => alert(err));
    })
}

const saveUser = (data) => {
    return ((dispatch) => {
        let { push } = useHistory();

        axios.post("https://fittnesslambda.herokuapp.com/api/auth/register", data)
            .then((resp) => {
                alert(resp.data);
                push("/");
                dispatch({type: IGNORE_EVENT, payload: resp.data})
            }).catch((err) => alert(err));
    })
}

export {
    loadUser,
    saveUser
}