import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
     }

  body {
    margin: 0;
    font-family: system-ui;
    background: linear-gradient(0deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
    background-attachment: fixed;
    display:flex;
    justify-content: center;
  }
  
`;
