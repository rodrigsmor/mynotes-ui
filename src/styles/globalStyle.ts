import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Readex Pro', sans-serif;
  }

  html {
    max-width: 100vw;
    overflow-x: hidden;
  }
`;