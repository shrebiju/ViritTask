import React from "react";
import styled from "styled-components";
import useWindowWidth from "../Hooks";
const StyleDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyleSection = styled.section`
  display: grid;
  width: ${(props) => props.width || "auto"};
  grid-template-columns: ${(props) =>
    props?.responsiveNumOfItemInRow
      ? `repeat(${props?.responsiveNumOfItemInRow || "1"}, 1fr)`
      : " repeat(1, 1fr)"};
  row-gap: ${(props) => props?.rowGap || "20"}px;
  column-gap: ${(props) => props?.columnGap || " 20"}px;
  margin: ${(props) => props.margin || "0px"};
  padding: ${(props) => props.padding || "0px"};
`;
const Grid = ({ children, container, ...restProps }) => {
  const windowWindow = useWindowWidth();
  const responsiveNumOfItemInRow =
    windowWindow > 1300
      ? restProps.lg
      : windowWindow > 640
      ? restProps.md
      : restProps.sm;
  // console.log(restProps, "children");
  // console.log(windowWindow, responsiveNumOfItemInRow);

  return (
    <>
      {container ? (
        <StyleSection
          {...restProps}
          responsiveNumOfItemInRow={responsiveNumOfItemInRow}
        >
          {children}
        </StyleSection>
      ) : (
        <StyleDiv {...restProps}>{children}</StyleDiv>
      )}
    </>
  );
};

export default Grid;
