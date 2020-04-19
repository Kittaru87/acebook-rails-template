import React, { useState } from "react";
import PostContext from "../../../context/Post/PostContext";

const Home = () => {
  const postContext = React.useContext(PostContext);
  const { something, changeSomething } = postContext;

  const [toChange, setToChange] = useState("");

  const handleChange = (event) => {
    setToChange(event.target.value);
  };

  const handleSubmit = (e) => {
    console.log(toChange);
    changeSomething(toChange);
    e.preventDefault();
  };

  return (
    <div data-test="home-container">
      <h2>This is the home page</h2>
    </div>
  );
};

export default Home;
