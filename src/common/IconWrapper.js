import React from "react";

const IconWrapper = (props) => {
  return (
    <button
      style={{
        width: props.width,
        height: props.height,
      }}
      onClick={props.onclick}
    >
      {props.icon}
    </button>
  );
};

export default IconWrapper;
