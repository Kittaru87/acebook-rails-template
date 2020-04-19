import React from "react";
import { Card } from "react-bootstrap";
import PostButtons from "../Buttons/Buttons";
import PropTypes from "prop-types";

const BootStrapCard = ({ post }) => {
  return (
    <Card
      className="text-center"
      style={{ width: "65%" }}
      data-test="card-container"
    >
      <Card.Header
        as="h5"
        style={{ backgroundColor: "#007bff", color: "white" }}
      >
        Posted by Nima
      </Card.Header>
      <Card.Body>
        <Card.Title data-test="message-container">{post.message}</Card.Title>
        <PostButtons />
      </Card.Body>
    </Card>
  );
};

BootStrapCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default BootStrapCard;
