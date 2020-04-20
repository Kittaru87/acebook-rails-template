import React from "react";
import { Card } from "react-bootstrap";
import PostButtons from "../Buttons/Buttons";
import Commentinput from "../Comment/CommentInput/CommentInput";
import PropTypes from "prop-types";

const BootStrapCard = ({ post }) => {
  const fontColor = "white";
  return (
    <Card
      className="text-center"
      style={{ width: "65%", backgroundColor: "#242526" }}
      data-test="card-container"
    >
      <Card.Header as="h5" style={{ color: fontColor }}>
        Posted by Nima
      </Card.Header>
      <Card.Body>
        <Card.Title data-test="message-container" style={{ color: fontColor }}>
          {post.message}
        </Card.Title>
        <PostButtons />
        <Commentinput />
      </Card.Body>
    </Card>
  );
};

BootStrapCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default BootStrapCard;
