import type { ReactNode } from "react";
import { Content, IStyledTextProps } from "./styles";

export interface ITextProps extends Partial<IStyledTextProps> {
  htmlAs?:
    | "p"
    | "span"
    | "i"
    | "b"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "strong";
  children?: ReactNode;
}

export function Text({
  htmlAs = "p",
  size = "medium",
  weight = "regular",
  children,
}: ITextProps) {
  return (
    <Content size={size} weight={weight} as={htmlAs}>
      {children}
    </Content>
  );
}
