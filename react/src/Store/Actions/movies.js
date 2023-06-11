// import axios from "axios";

import { axiosInstance } from "../../Network/axiosInstance"


export const getMoviesList = (data) => (dispatch) => {
    return axiosInstance.get(data)
    .then((res) => dispatch({
        type: "GET_MOVIES_LIST",
        payload: res.data.results
    }))
    .catch((err) => console.log(err))
}