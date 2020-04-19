import React, { Fragment } from "react";
import { Button } from "react-bootstrap";

const Buttons = () => {
  const buttonSpacing = "1";
  const buttonSize = "sm";
  return (
    <Fragment>
      <Button
        variant="primary"
        size={buttonSize}
        data-test="edit-container"
        className={`mr-${buttonSpacing}`}
      >
        Edit
      </Button>
      <Button variant="primary" size={buttonSize} data-test="comment-container">
        Comment
      </Button>
      <Button
        variant="primary"
        size={buttonSize}
        data-test="delete-container"
        className={`ml-${buttonSpacing}`}
      >
        Delete
      </Button>
    </Fragment>
  );
};

export default Buttons;
