import axios from 'axios'

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: 'http://https://fittnesslambda.herokuapp.com'
    })
}

export default axiosWithAuth