import { createPost, deletePost } from "../../actions/postActions";
import { postReducer } from "../postReducer";

describe("postReducer", () => {
  it("creates a new post with the CREATE_POST action", () => {
    const state = { posts: [] };

    const action = createPost({
      id: 1,
      title: "title",
      body: "body",
    });

    const updated = postReducer(state, action);

    expect(updated).toEqual({
      posts: [
        {
          id: 1,
          title: "title",
          body: "body",
        },
      ],
    });
  });

  it("deletes a new post with the DELETE_POST action", () => {
    const state = {
      posts: [
        {
          id: 1,
          title: "title",
          body: "body",
        },
        {
          id: 2,
          title: "title",
          body: "body",
        },
      ],
    };

    const action = deletePost(1);

    const updated = postReducer(state, action);

    expect(updated).toEqual({
      posts: [
        {
          id: 2,
          title: "title",
          body: "body",
        },
      ],
    });
  });
});
