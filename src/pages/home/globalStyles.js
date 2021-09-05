import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  #App {
    width:100vw;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
  }
`;
 
export default GlobalStyle;