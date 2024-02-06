import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: ${(p) => p.width};
  height: ${(p) => p.height};
`;

const IconWrapper = (props) => {
  return (
    <Button width={props.width} height={props.height} onClick={props.onclick}>
      {props.icon}
    </Button>
  );
};

export default IconWrapper;
