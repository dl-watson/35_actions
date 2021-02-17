import { CREATE_POST } from "../actions/postActions";

export const initialState = {
  posts: [],
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
  }
};
