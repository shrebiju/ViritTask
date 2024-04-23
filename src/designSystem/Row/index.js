import React  from "react";
import styled, { css } from "styled-components";


const StyleRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => props?.alignItems || "inherit"};
  justify-content: ${(props) => props?.justifyContent || "inherit"};
  margin: ${(props) => props?.margin || "0px"};
  padding: ${(props) => props?.padding || "0px"};
  column-gap: ${(props) => props?.columnGap || 10}px;

 ${(props) =>
    props.mediaStyles &&
    css`
      @media (max-width: 830px) {
        column-gap: ${props.mediaStyles.columnGap || ""};
      }
      @media (max-width: 1200px) {
        column-gap: ${props.mediaStyles.columnGap || ""};
      }
    `} 
`;

const Row = ({ children, ...restProps }) => {
  return <StyleRow {...restProps}>{children}</StyleRow>;
};

export default Row;
