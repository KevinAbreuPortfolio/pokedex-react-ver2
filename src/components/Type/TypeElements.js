import styled from 'styled-components'
import {typeColor} from './TypeColor'

const TypeDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
height: 10%;
width: 100px;
border-radius:2px;
/* border: 2px solid hsl(200, 100%, 20%); */
/* text-align:center; */
padding:5px;
background-color: ${props => props.typehue};
text-transform:capitalize;
color: white;
font-family:'Futura';
`
export default TypeDiv
