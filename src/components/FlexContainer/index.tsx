import type { ReactNode } from "react";
import { Container, IContainerProps } from "./styles";

export interface IFlexContainerProps extends Partial<IContainerProps> {
  children?: ReactNode;
}

export function FlexContainer({
  children,
  align = "start",
  flexDirection = "row",
  gap = 0,
  justify = "start",
  wrap = "wrap",
  height = "100%",
}: IFlexContainerProps) {
  return (
    <Container
      align={align}
      flexDirection={flexDirection}
      gap={gap}
      justify={justify}
      wrap={wrap}
      height={height}
    >
      {children}
    </Container>
  );
}
