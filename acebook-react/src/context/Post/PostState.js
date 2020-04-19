import React, { useReducer } from "react";
import PostContext from "./PostContext";
import PostReducer from "./PostReducer";
import * as TYPES from "../Types";

//PostState gathers resources to dispatch to reducer to manipulate state
const PostState = (props) => {
  const initialState = {
    something: null,
    posts: [
      {
        id: 1,
        message: "this is a great post",
        date_created: "2020-01-06",
        date_updated: "2020-01-08",
      },
      {
        id: 2,
        message: "this is a post that goes on and on and on",
        date_created: "2020-02-06",
        date_updated: "2020-03-08",
      },
      {
        id: 3,
        message: "a brilliant time is to be had here",
        date_created: "2020-02-04",
        date_updated: "2020-03-09",
      },
    ],
  };

  const [state, dispatch] = useReducer(PostReducer, initialState);

  const changeSomething = (str) => {
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
