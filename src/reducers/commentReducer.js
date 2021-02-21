import {
  CREATE_COMMENT,
  DELETE_COMMENT,
  DELETE_POST_COMMENTS,
} from "../actions/commentActions";

export const initialState = {};

export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        [action.payload.postIndex]: [
          ...(state[action.payload.postIndex] || []),
          action.payload.comment,
        ],
      };
    case DELETE_COMMENT:
      return {
        ...state,
        [action.payload.postIndex]: [
          ...state[action.payload.postIndex].filter(
            (comment, index) => index !== action.payload.commentIndex
          ),
        ],
      };
    case DELETE_POST_COMMENTS:
      return {
        ...state,
        [action.payload]: [],
      };
    default: {
      return state;
    }
  }
};
