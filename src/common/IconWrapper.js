import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: ${(p) => p.width};
  height: ${(p) => p.height};
  border-width: 0;
  background-color: white;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
  &:focus-visible {
    outline: none;
  }
`;

const IconWrapper = (props) => {
  return (
    <Button width={props.width} height={props.height} onClick={props.onClick}>
      {props.icon}
    </Button>
  );
};

export default IconWrapper;
