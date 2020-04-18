import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPenSquare,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavigationBarIcons = () => {
  const spacing = "8px";
  return (
    <div data-test="component-icons">
      <Link to="/">
        <FontAwesomeIcon
          icon={faHome}
          size="lg"
          style={{ marginRight: spacing, color: "black" }}
          data-test="home-icon"
        />
      </Link>
      <Link to="">
        <FontAwesomeIcon
          icon={faPenSquare}
          size="lg"
          style={{ marginRight: spacing, color: "black" }}
          data-test="edit-icon"
        />
      </Link>
      <Link to="">
        <FontAwesomeIcon
          icon={faArrowRight}
          size="lg"
          data-test="logout-icon"
          style={{ color: "black" }}
        />
      </Link>
    </div>
  );
};

export default NavigationBarIcons;
