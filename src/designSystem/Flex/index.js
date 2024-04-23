import React from "react";
import styled from "styled-components";
import useWindowWidth from "../Hooks";

const StyleFlexContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  column-gap: ${(props) => props.columnGap || 0}px;
  row-gap: ${(props) => props.rowGap || 0}px;
  justify-content: ${(props) => props?.justifyContent || "space-between"};
  padding: ${(props) => props.padding || "0px"};
  margin: ${(props) => props.margin || "0px"};
`;

const StyleFlexItem = styled.div`
  /* width: ${(props) => (props?.lg / 12) * 100 - 1}%; */
  width: ${(props) =>
    (props?.actualWidth / 12) * 100 - (props.spacing || 1) || "auto"}%;
`;

const Flex = ({ children, container, item, ...restProps }) => {
  const windowWidth = useWindowWidth();
  if (container) {
    return <StyleFlexContainer {...restProps}>{children}</StyleFlexContainer>;
  } else if (item) {
    const actualWidth =
      windowWidth > 1300
        ? restProps.lg
        : windowWidth > 640
        ? restProps.md
        : restProps.sm;
    console.log(actualWidth);
    return (
      <StyleFlexItem {...restProps} actualWidth={actualWidth}>
        {children}
      </StyleFlexItem>
    );
  } else {
    return <></>;
  }
};

export default Flex;
