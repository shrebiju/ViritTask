import React from "react";
import styled from "styled-components";



const Button = styled.button`
  background-color: ${(props) => (props.hovered ? "#01A3E0" : "white")};
  color: ${(props) => (props.hovered ? "white" : "#01A3E0")};
  border: ${(props) => (props.hovered ? "2px solid #01A3E0" : "2px solid #01A3E0")};
  border-radius: ${(props) => (props.hovered ? props.borderRadius || "10px" : props.borderRadius || "0px")};
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #01A3E0;
    color: white;
    border: 2px solid #01A3E0;
    
  }
`;


const HoverableButton = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>;
};

export default HoverableButton;
