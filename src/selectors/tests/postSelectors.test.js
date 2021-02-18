import { getPosts } from "../postSelectors";

describe("getPosts", () => {
  it("grabs the list of posts from state", () => {
    const state = {
      posts: [{ id: 1, title: "title", body: "body" }],
    };

    const posts = getPosts(state);

    expect(posts).toEqual(state.posts);
  });
});
