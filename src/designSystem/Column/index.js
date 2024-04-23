import React, { ReactNode } from "react";
import styled from "styled-components";

const StyleColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props?.alignItems || "inherit"};
  justify-content: ${(props) => props?.justifyContent || "inherit"};
  margin: ${(props) => props?.margin || "0px"};
  row-gap: 10px;
  padding: ${(props) => props?.padding || "0px"};
`;
const Column = ({ children, ...restProps }) => {
  return <StyleColumn {...restProps}>{children}</StyleColumn>;
};

export default Column;
