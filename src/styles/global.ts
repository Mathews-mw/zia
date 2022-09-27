import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: none;
  }

  :focus {
    outline: 0;
    border: 0;
    box-shadow: 0 0 0 1px ${props => props.theme["blue-500"]};
  }

  body {
    background-color: ${props => props.theme.white};
    color: ${props => props.theme["gray-900"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Robot, sans-serif;
  }
`;