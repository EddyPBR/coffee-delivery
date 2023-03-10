import styled from "styled-components";

interface IButtonContainerProps {
  quantity?: number;
}

export const ButtonContainer = styled.button<IButtonContainerProps>`
  background-color: ${(props) => props.theme["yellow-light"]};
  padding: 0.5rem;

  border-radius: 0.375rem; // 6px
  display: inline-flex;

  position: relative;

  svg {
    color: ${(props) => props.theme["yellow-dark"]};
    font-size: 1.375rem; // 22px
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme["yellow-dark"]};
  }

  &::after {
    content: "${(props) => props.quantity}";

    position: absolute;
    top: -0.5rem; // -8px
    right: -0.5rem; // -8px

    height: 1.25rem; // 22px
    width: 1.25rem; // 22px

    background-color: ${(props) => props.theme["yellow-dark"]};
    color: ${(props) => props.theme.white};

    font-size: 0.75rem; // 12px
    font-weight: 700;

    border-radius: 1000px;

    display: ${(props) => (props.quantity ? "flex" : "none")};
    justify-content: center;
    align-items: center;
  }

  &:focus::after {
    box-shadow: 0 0 0 2px ${(props) => props.theme["yellow-dark"]};
  }
`;
