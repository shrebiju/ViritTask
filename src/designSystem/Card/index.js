import React from "react";
import styled from "styled-components";

const View = styled.div`
  &,
  :active,
  :focus {
    background-color: ${(props) => props.backgroundColor || "white"};
    }
    box-shadow: ${(props) =>
      props.boxShadow || "0px 1px 4px rgba(0, 0, 0, 0.25)"};
    padding: ${(props) => props.padding || "0px"};
    margin: ${(props) => props.margin || "0px"};
    min-height: 50px;
    border-radius: ${(props) => props.borderRadius || 0}px;
    height: ${(props) => props.height || ""};
    width: ${(props) => props.width || ""};

    border: 1px solid transparent; /* Ensure there's a border */
    transition: border-color 0.3s ease; /* Add transition for smooth effect */
  }

 
  &:hover {
    border-color: skyblue; 
  }
`;

const Card = ({ children, ...restProps }) => {
  return (
    <View className="cardContainer" {...restProps}>
      {children}
    </View>
  );
};

export default Card;
