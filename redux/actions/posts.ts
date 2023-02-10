import axios from 'axios'
import baseAxios from '../../config/baseAxios';
import { GET_POSTS, GET_POST, UPDATE_POST, DELETE_POST, CREATE_POST } from '../constants'

export const getPosts = () => async (dispatch: any) => {
  try {
    const response = await axios.get('http://locslhost:3001/posts');
    dispatch({
      type: GET_POSTS,
      payload: response,
    })
  } catch (error) {
    console.log(error);
  }
}

export const createPost = (body: any) =>async (dispatch: any) => {
  try {
    console.log(body);
    
    const response = await baseAxios.post('/posts', {body});
    console.log(response);
    
  } catch (error) {
    console.log(error);
  }
}