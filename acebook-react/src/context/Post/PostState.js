import React, { useReducer, useState } from "react";
import PostContext from "./PostContext";
import PostReducer from "./PostReducer";

//PostState gathers resources to dispatch to reducer to manipulate state
const PostState = (props) => {
  const initialState = { something: null };

  const [state, dispatch] = useReducer(PostReducer, initialState);

  const getPosts = async () => {};

  return (
    <PostContext.Provider value={{ something: state.something }}>
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
