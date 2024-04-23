import React from "react";
import styled from "styled-components";

const StyleParagraph = styled.p`
  font-size: ${(props) =>
    props.fontSize ? `${props.fontSize}` : "var(--fontSm)"};
  line-height: ${(props) => props.lineHeight || 20}px;
  padding: ${(props) => props.margin || "0px"};
  margin: ${(props) => props.padding || "0px"};
  text-align: ${(props) => props.textAlign || "left"};
  width: ${(props) => props.width || ""}%;
  color: ${(props) => props.color || "var(--textColor)"}; // Apply color directly
  font-weight: ${(props) => props.fontWeight || "500"};
`;

const WordSpan = styled.span``;

const Paragraph = ({ children, ...restProps }) => {
  const { mediaStyles, ...paragraphProps } = restProps;

  return (
    <StyleParagraph {...paragraphProps} mediaStyles={mediaStyles}>
      {React.Children.toArray(children).flatMap((word, index) => (
        <React.Fragment key={index}>
          <WordSpan>{word}</WordSpan>{" "}
        </React.Fragment>
      ))}
    </StyleParagraph>
  );
};

export default Paragraph;
