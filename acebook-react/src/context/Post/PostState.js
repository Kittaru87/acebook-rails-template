import React, { useReducer } from "react";
import PostContext from "./PostContext";
import PostReducer from "./PostReducer";
import * as TYPES from "../Types";

//PostState gathers resources to dispatch to reducer to manipulate state
const PostState = (props) => {
  const initialState = { something: null };

  const [state, dispatch] = useReducer(PostReducer, initialState);

  const changeSomething = async (str) => {
    dispatch({
      type: TYPES.CHANGE_SOMETHING,
      payload: str,
    });
  };

  return (
    <PostContext.Provider
      value={{ something: state.something, changeSomething }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
