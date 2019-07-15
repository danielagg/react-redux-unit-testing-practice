import { types } from "../../actions/types";
import postsReducer from "./postReducer";

describe("Posts Reducer", () => {
  it("Should return default state when types dont match", () => {
    const newState = postsReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it("Should return new state when receiving matching type", () => {
    const posts = [
      { title: "Test title 1" },
      { title: "Test title2" },
      { title: "Test title3" }
    ];
    const newState = postsReducer(undefined, {
      type: types.GET_POSTS,
      payload: posts
    });
    expect(newState).toEqual(posts);
  });
});
