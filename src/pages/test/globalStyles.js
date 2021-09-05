import { createGlobalStyle } from 'styled-components';
import Futura from '../../fonts/Futura-Heavy-Regular.otf'
 
export const GlobalStyle = createGlobalStyle`
  #App {
    /* width:100vw; */
    /* height:100vh; */
    display:flex;
    /* justify-content:center; */
    align-items:center;
    flex-direction:column;  
  }
  *{
    font-family: ${Futura} !important;
  }
`;
 
export default GlobalStyle;