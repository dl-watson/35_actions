export const CREATE_POST = "CREATE_POST";
export const createPost = (post) => ({
  type: CREATE_POST,
  payload: post,
});

export const DELETE_POST = "DELETE_POST";
export const deletePost = (postId) => ({
  type: DELETE_POST,
  payload: postId,
});

// export const UPDATE_POST = "UPDATE_POST";
// export const updatePost = (id, text) => {
// console.log("updatePost, ", id, text);
// return {
// type: UPDATE_POST,
// payload: { id, text },
// };
// };
