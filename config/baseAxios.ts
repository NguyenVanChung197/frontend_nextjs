import axios, { AxiosError } from 'axios';

const baseAxios = axios.create({
  baseURL: process.env.ENDPOINT_API,
})

export default baseAxios;
