import axios from 'axios';
import settings from '~/settings';

const { API_HOST } = settings;
// const API_HOST = 'baidu.com'
// TODO  修改头
export const BoosterRequest = axios.create({
  baseURL: `https://${API_HOST}/api/`,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});
