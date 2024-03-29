//Add Axios interceptor in index.js file
import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use((request) => {
    // Do something before request is sent
    return request;
}, (error) => {
    // Do something with request error
    return Promise.reject(error);
});


// Add a response interceptor
axios.interceptors.response.use((response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});