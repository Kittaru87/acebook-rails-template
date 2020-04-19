import React, { useState, useContext } from "react";
import PostContext from "../../../context/Post/PostContext";
import { Card, Button } from "react-bootstrap";
import "./Home.css";
import BootStrapCard from "../../Post/BootStrapCard/BootStrapCard";

const Home = () => {
  const postContext = useContext(PostContext);
  const { posts } = postContext;

  return (
    <div data-test="home-container" className="container">
      <h2 className="text-center">Posts</h2>
      {posts.map((post) => (
        <div key={post.id} data-test="post-individual" className="alignCenter">
          <BootStrapCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default Home;
