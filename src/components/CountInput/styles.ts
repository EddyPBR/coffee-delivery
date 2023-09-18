import styled from "styled-components";

export interface IInputContainerProps {
  size: "medium" | "large";
}

export const InputContainer = styled.div<IInputContainerProps>`
  display: flex;

  & > input {
    width: 1.5rem;
    height: ${(props) => (props.size === "large" ? "2.375rem" : "2rem")};

    border: none;
    text-align: center;
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme["base-title"]};
    background-color: ${(props) => props.theme["base-button"]};

    &:active, &:focus {
      z-index: 1000;
    }

    &::-webkit-inner-spin-button, &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      appearance: none;
      margin: 0;
    }
  }

  & > button {
    width: 1.5rem;
    height: ${(props) => (props.size === "large" ? "2.375rem" : "2rem")};
    font-size: 0.875rem;
    color: ${(props) => props.theme["purple"]};
    transition: color ease-in-out .2s;
    background-color: ${(props) => props.theme["base-button"]};

    &:hover {
      color: ${(props) => props.theme["purple-dark"]};
    }

    &:active, &:focus {
      color: ${(props) => props.theme["purple-dark"]};
      z-index: 1000;
    }
  }

  & > button:first-child {
    border-radius: 0.365rem 0 0 0.365rem;
  }

  & > button:last-child {
    border-radius: 0 0.365rem 0.365rem 0;
  }
`;
