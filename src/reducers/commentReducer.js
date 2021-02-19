import { CREATE_COMMENT, DELETE_COMMENT } from "../actions/commentActions";

export const initialState = {
  comments: [],
};

export const commentReducer = (state = initialState, action) => {
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
          (comment) => comment[action.payload.postId].id !== action.payload.id
        ),
      };
    default: {
      return state;
    }
  }
};
