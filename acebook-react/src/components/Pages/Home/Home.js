import React, { useState, useContext } from "react";
import PostContext from "../../../context/Post/PostContext";

const Home = () => {
  const postContext = useContext(PostContext);
  const { posts } = postContext;
  // const getAllPosts = () => {
  //   return posts.map((post) => (
  //     <div data-test="post-individual">{post.message}</div>
  //   ));
  // };

  return (
    <div data-test="home-container">
      <div data-test="post-container"></div>
      <h2>This is the home page, which displays posts</h2>
      {posts.map((post) => (
        <div key={post.id} data-test="post-individual">
          {post.message}
        </div>
      ))}
    </div>
  );
};

export default Home;
