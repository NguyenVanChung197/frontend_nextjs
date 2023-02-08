import {
  GET_POSTS
} from '../constants'

const initial = {
  posts: null,
  post: null,
  create: null,
  update: null,
  delete: null,
};

const posts = ( state = initial, action: any ) => {
  switch(action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      }
    default:
      return state;
  }
}

export default posts;
