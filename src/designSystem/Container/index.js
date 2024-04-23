import React from "react";
import styled from "styled-components";

const StyleContainer = styled.div`
  width: ${(props) => props.width || "95"}%;
  margin: 0px auto;
  text-align: "left;
`;

const Container = ({ children, ...restProps }) => {
  return <StyleContainer {...restProps}>{children}</StyleContainer>;
};

export default Container;
