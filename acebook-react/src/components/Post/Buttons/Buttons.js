import React from "react";
import { Button } from "react-bootstrap";
import "./Buttons.css";

const Buttons = () => {
  const buttonSpacing = "1";
  const buttonSize = "sm";
  return (
    <div className="ButtonContainer">
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
    </div>
  );
};

export default Buttons;
