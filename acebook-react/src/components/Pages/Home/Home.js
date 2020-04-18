import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Hello from home
      <div>
        <Link to="/profile">To Profile page from Link</Link>
        <button>
          <Link to="/profile">To Profile page from button with Link</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
