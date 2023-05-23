import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{ 
      margin: 0;
      padding: 0;
      scroll-behavior: auto;
     
   }
   :focus {
      outline:0;
      box-shadow:none;
   }
   html {
      scroll-behavior: smooth;
}
   body{
      
      font-family: 'Inter';
      font-size: 1rem;
      -webkit-font-smoothing: antialiased;
         scroll-behavior: smooth;
   }
   input, button, h1, p, span, textarea {
      font-family: 'Inter';
      color: ${({ theme }) => theme.white};
      border: 0;
      box-shadow: none;
   }
`;
