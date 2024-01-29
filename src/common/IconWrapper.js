import React from "react";

const IconWrapper = ({ width, height, icon, func }) => {
  return (
    <button
      style={{
        width: width,
        height: height,
      }}
      onClick={func}
    >
      {icon}
    </button>
  );
};

export default IconWrapper;
