import React, { Fragment } from "react";
import { Button } from "react-bootstrap";

const Buttons = () => {
  return (
    <Fragment>
      <Button variant="primary" size="sm">
        Edit
      </Button>
      <Button variant="primary" size="sm">
        Comment
      </Button>
      <Button variant="primary" size="sm">
        Delete
      </Button>
    </Fragment>
  );
};

export default Buttons;
