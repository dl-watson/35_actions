import { CREATE_COMMENT } from "../actions/commentActions";
import { CREATE_POST, DELETE_POST, UPDATE_POST } from "../actions/postActions";

export const initialState = {
  posts: [],
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    // case UPDATE_POST:
    //   return {
    //     ...state,
    //     posts: state.posts.map((post) => {
    //       console.log("reducer", action.payload.id);

    //       if (post.id === action.payload.id) {
    //         post.postcomment = action.payload.text;
    //       }
    //     }),
    //   };
    default: {
      return state;
    }
  }
};
