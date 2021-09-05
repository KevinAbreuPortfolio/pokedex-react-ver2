import styled from 'styled-components'
import {Link} from 'react-router-dom';

export const Box = styled.div`
width: 750px;
height: 500px;
display:flex;
flex-direction:column;
justify-content:space-around;
`

export const PokeContainer = styled.div`
width: 500px;
height: 500px;
display: flex;
flex-direction:column;
/* background-color:red; */
`

export const PokeInput = styled.input`

width: 100%;
outline:none;
/* width: clamp(75%,5vw,100%); */
/* height:10%; */
border-radius: 0.313em;
font-size: 1.500em;
border: solid black 1px;
/* border: solid #bbbbbb 1px; */
/* padding-left: 2%; */
text-align: center;
:focus {
    outline: none;
    border: solid black 1px;
    /* border: solid #bbbbbb00 1px; */
    box-shadow: 0px 0px 0px 2px black;
    /* box-shadow: 0px 0px 0px 2px rgba(50, 50, 50, 0.5); */
    /* padding-left: 2%; */
    text-align: center;
    ::placeholder{
        font-size: clamp(17px,.2vw,26px);
        transition: all .3s ease;
    }
    transition: all .3s ease;
}
::placeholder{
    font-size: clamp(15px,.2vw,24px);
    /* font-size: 15px; */
    text-align: center;
    transition: all .3s ease;
}
transition: all .3s ease;
`

export const PokeButton = styled.button`
border-radius: 10px;
/* width: 100%; */
background-color: grey;
text-decoration: none;
border: solid darkgray 2px;
color: whitesmoke;
cursor: pointer;
transition: all .25s ease;
:hover{
    background-color: lightgray;
    transition: all .25s ease;
    color: black;
    outline: solid black 1px;
}
:active{
    background-color: darkslategray;
    transition: all .25s ease;
}
:focus{
    background-color: white;
    color:black;
    outline: solid black 2px;
    transition: all .25s ease;
}
`
export const PokeDetails = styled(PokeButton)`
background-color: yellow;
width: 100%;
height: 100%;

`

export const PokeImage = styled.div`
background-image: ${props => props.img};
background-color:blue;
width: 100%;
height: 50%;

`

export const PokeInfo = styled.div`
display:flex;
width:100%;
height: 100%;
/* background-color: green; */
`

export const Container = styled.div`
width:100vw;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`
export const ButtonLink = styled(Link)`
    height: 60px;
    width: auto;
    padding: 5px;
    border-radius: 2px;
    background-color:#aaaaff ;
`

export const ButtonNav = styled.div`
/* background: white; */
/* border-radius: 99999999px; */
display: flex;
justify-content:space-around;
align-items: center;
gap:0.313em;
*{
    flex-basis:100%;
    height: 60%;
    border-radius: 0.313em;
    border:none;
    padding: 0;
    background:black;
    color: white;
    font-family:'Futura'
}
a button{
    width:100%;
    height: 100%;
    border-radius: 0.313em;
    /* z-index:0; */
    :hover{
        background-color: lightgray;
    }
}

`