import styled from "styled-components";

type SizeType = "large" | "medium" | "small";
type WeightType = "bold" | "regular";

export interface IStyledTextProps {
  size: SizeType;
  weight: WeightType;
}

export function fontSize(size: SizeType) {
  switch (size) {
    case "large":
      return "1.25rem";
    case "medium":
      return "1rem";
    case "small":
      return "0.75rem";
    default:
      return "1rem";
  }
}

export function fontWeight(weight: WeightType) {
  switch (weight) {
    case "bold":
      return 700;
    case "regular":
      return 400;
    default:
      return 400;
  }
}

export const Content = styled.p<IStyledTextProps>`
  font-size: ${(props) => fontSize(props.size)};
  font-weight: ${(props) => fontWeight(props.weight)};
  color: ${(props) => props.theme["base-subtitle"]};
  font-family: "Roboto", sans-serif;
  line-height: 1.3;
`;
