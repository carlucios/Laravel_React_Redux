import Axios from "axios";

export const rootUrl = 'http://localhost/';
export const homeUrl = 'http://localhost:3000';

export const Http = Axios.create({
    baseURL : rootUrl
})