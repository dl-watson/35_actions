import { CREATE_COMMENT, DELETE_COMMENT } from "../actions/commentActions";

export const initialState = {
  comments: [],
};

export const commentReducer = (state, action) => {
  switch (action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment.id !== action.payload
        ),
      };
    default: {
      return state;
    }
  }
};
