import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["purple"]};
  }

  body {
    background: ${(props) => props.theme["background"]};
    color: ${(props) => props.theme["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    line-height: 1.3;
    font-weight: 400;
  }

  input, textarea, button {
    font-size: 0.875rem;
  }

  button {
    border: none;
    cursor: pointer;
    line-height: 1;
  }
  
  h1, h2, h3, h4, h5, h6, strong {
    font-family: "Baloo 2", cursive;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme["base-title"]};
  }
`;
