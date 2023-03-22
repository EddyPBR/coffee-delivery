import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

export interface IIconProps {
  backgroundColor: keyof typeof defaultTheme;
  iconColor: keyof typeof defaultTheme;
  iconFill: keyof typeof defaultTheme;
}

export const InfoContainer = styled.article`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
`;

export const Icon = styled.div<IIconProps>`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme[props.backgroundColor]};

  display: flex;
  justify-content: center;
  align-items: center;

  svg, img {
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme[props.iconColor]};
    fill: ${(props) => props.theme[props.iconFill]};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
