import styled from "styled-components";

type SizeType = "extra-large" | "large" | "medium" | "small" | "extra-small";

export interface IStyledTitleProps {
  size: SizeType;
}

export function fontSize(size: SizeType) {
  switch (size) {
    case "extra-large":
      return "3rem";
    case "large":
      return "2rem";
    case "medium":
      return "1.5rem";
    case "small":
      return "1.25rem";
    case "extra-small":
      return "1.125rem";
    default:
      return "3rem";
  }
}

export const Content = styled.h1<IStyledTitleProps>`
  font-size: ${(props) => fontSize(props.size)};
  font-family: "Baloo 2", cursive;
  line-height: 1.3;
  font-weight: 700;
  color: ${(props) => props.theme["base-title"]};
`;
