import axios from 'axios';

axios.defaults.baseURL = "http://myiix.test";
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.response.use(
    (res) => {
        return res;
    },
    
    (err) => {
        return err.response.status === 401 ? 
            '' : //dispatch logout to context !!! HOW ?!?!?!
            Promise.reject(err);
    }
);

export default axios;