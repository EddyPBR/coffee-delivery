import type { ReactNode } from "react";
import { Content, IIconProps, Icon, InfoContainer } from "./styles";

export interface IInfoProps extends Partial<IIconProps> {
  title: ReactNode;
  subtitle?: ReactNode;
  icon: ReactNode;
}

export function Info({
  title,
  subtitle,
  icon,
  backgroundColor = "base-title",
  iconColor = "white",
  iconFill = "white",
}: IInfoProps) {
  return (
    <InfoContainer>
      <Icon
        backgroundColor={backgroundColor}
        iconColor={iconColor}
        iconFill={iconFill}
      >
        {icon}
      </Icon>
      <Content>
        {title}
        {subtitle}
      </Content>
    </InfoContainer>
  );
}
