import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Serif+Text:ital@0;1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=DM+Serif+Display:ital@0;1&display=swap');    
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  body {
    font-family: "DM Serif Display","DM Sans", sans-serif, serif;
    font-size: 62.5%;
    letter-spacing: 0.1rem;
    margin: 0;
    padding: 0;
    background-color: rgb(234, 241, 240);;
    color: #333;
  }
`;

export default GlobalStyles;
