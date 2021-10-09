import Axios from 'axios';
import store from '../store';
import {SIGN_OUT_SUCCESS} from '../store/Auth/actionTypes';
import {baseURL} from '../constants';

const axios = Axios.create({
  baseURL,
  withCredentials: true,
});

axios.interceptors.request.use(config => {
  // TODO try to add PersistGates
  const token = store.getState().auth.token || null;
  config.headers.authorization = token ? `Bearer ${token}` : null;
  return config;
});

axios.interceptors.response.use(
  res => {
    return res;
  },
  error => {
    // console.log('AXIOS----------', error.response);
    // if (error.message === 'Network Error' || error.code === 'ECONNABORTED') {
    //   return Promise.reject(error);
    // }
    if (error.response.status === 401) {
      return store.dispatch({
        type: SIGN_OUT_SUCCESS,
      });
    }
    return Promise.reject(error);
  },
);

export default axios;
