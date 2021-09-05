import styled from 'styled-components'

export const Pokecard = styled.div `
/* width: 100%; */
/* height: 400px; */
display: flex;
/* flex-wrap: wrap; */
/* background-color: red; */
flex-direction: column;

/* align-content:flex-end; */
section:first-child{
    flex-basis:90%;
}
div:nth-child(2),
div:last-child{
    flex-basis: 10%;
}
`
export const PokeImage = styled.section`
/* height:500px; */
background-image: url(${props => props.img});
background-size: contain;
background-repeat: no-repeat;
background-position: center;
`