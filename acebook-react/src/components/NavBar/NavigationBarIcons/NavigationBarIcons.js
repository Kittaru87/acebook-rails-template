import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPenSquare,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const NavigationBarIcons = () => {
  const spacing = "8px";
  return (
    <div>
      <FontAwesomeIcon
        icon={faHome}
        size="lg"
        style={{ marginRight: spacing }}
      />
      <FontAwesomeIcon
        icon={faPenSquare}
        size="lg"
        style={{ marginRight: spacing }}
      />
      <FontAwesomeIcon icon={faArrowRight} size="lg" />
    </div>
  );
};

export default NavigationBarIcons;
