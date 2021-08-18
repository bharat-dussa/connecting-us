import React from "react";
import { IconContainer } from "./button-component-style";

const IconButtonComponent = ({ Icon, title, color }) => {
  return (
    <IconContainer>
      <div className="photo_container">
        <Icon style={{ color: color }} />
        <p>{title}</p>
      </div>
    </IconContainer>
  );
};

export default IconButtonComponent;
