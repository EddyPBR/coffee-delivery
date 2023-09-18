import type { ReactNode } from "react";
import { Container, IContainerProps } from "./styles";

export interface IAppContainerProps extends Partial<IContainerProps> {
  children?: ReactNode;
}

export function AppContainer({
  children,
  align = "start",
  flexDirection = "row",
  gap = 0,
  justify = "start",
  wrap = "wrap",
  height = "100%",
}: IAppContainerProps) {
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
