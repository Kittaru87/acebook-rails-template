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

      <FontAwesomeIcon
        icon={faPenSquare}
        size="lg"
        style={{ marginRight: spacing }}
        data-test="edit-icon"
      />
      <FontAwesomeIcon icon={faArrowRight} size="lg" data-test="logout-icon" />
    </div>
  );
};

export default NavigationBarIcons;
