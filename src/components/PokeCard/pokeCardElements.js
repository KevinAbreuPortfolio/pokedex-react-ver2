import styled from 'styled-components'

export const PokeContainer = styled.div`
width: 100%;
/* height: 500px; */
display: flex;
flex-direction:column;
/* background-color:red; */
div:nth-child(1){
flex-basis: 90%;
}
div:nth-child(2){
flex-basis:10%;
}
`

export const PokeImage = styled.div`
/* background-color:blue; */
background-image: url(${props => props.img});
background-size:contain;
background-repeat:no-repeat;
background-position:center;
width: 100%;
height: 100%;
`


export const PokeInfo = styled.div`
/* display:flex; */
justify-content: center;
width:100%;
height: 100%;
/* background-color: green; */
`