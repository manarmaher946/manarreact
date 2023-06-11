import axios from "axios";



export const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0"
})


