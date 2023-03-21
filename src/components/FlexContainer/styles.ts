import styled from "styled-components";

export interface IContainerProps {
  flexDirection: "row" | "column";
  align: "start" | "end" | "center" | "stretch" | "baseline";
  justify: "start" | "end" | "center" | "space-between" | "stretch";
  wrap: "nowrap" | "wrap" | "wrap-reverse";
  gap: number | string;
  height: number | string;
}

export const Container = styled.div<IContainerProps>`
  max-width: 70rem; // 1120px
  width: 90vw;
  height: ${(props) => props.height};
  margin: 0 auto;

  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justify};
  flex-wrap: ${(props) => props.wrap};
  align-items: ${(props) => props.align};
`;
