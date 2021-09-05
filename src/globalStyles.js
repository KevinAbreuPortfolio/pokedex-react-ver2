import { createGlobalStyle } from 'styled-components';
import Futura from '.././src/fonts/Futura-Heavy-Regular.otf'
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: ${Futura} !important;
  }
  body{
    background: linear-gradient(145deg, rgba(244,82,59,1) 15%, 
    rgba(250,114,72,1) 15%, rgba(250,114,72,1) 50%, rgba(250,114,72,1) 50%, 
    rgba(250,114,72,1) 85%, rgba(244,82,59,1) 85%);
    /* font-family:'Corinthian'; */
    font-size: clamp(1em,4vw,1.250em);
    /* font-size: 1.250em; */
  }
  button{
    font-size: clamp(1em,4vw,1.063em);
  }
  h1{
    font-family:'Sequel_Sans';
    font-weight:bold;
  }

`;
 
export default GlobalStyle;