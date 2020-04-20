import React, { Fragment } from "react";
import "./CommentInput.css";

const CommentInput = () => {
  return (
    <Fragment>
      <form data-test="comment-container">
        <textarea
          placeholder="Write a comment..."
          className="CommentContainer"
        />
      </form>
    </Fragment>
  );
};

export default CommentInput;
