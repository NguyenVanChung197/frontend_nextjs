import axios, { AxiosError } from 'axios';

const baseAxios = axios.create({
  baseURL: process.env.ENDPOINT_API,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
    'Content-Type': 'application/json, application/x-www-form-urlencoded',
  }
})

export default baseAxios;
