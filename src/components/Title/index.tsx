import type { ReactNode } from "react";
import { Content, IStyledTitleProps } from "./styles";

export interface ITitleProps extends Partial<IStyledTitleProps> {
  htmlAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "strong" | "bold";
  children?: ReactNode;
}

export function Title({ htmlAs = "h1", size = "extra-large", children }: ITitleProps) {
  return (
    <Content as={htmlAs} size={size}>
      {children}
    </Content>
  );
}
