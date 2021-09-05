import React from 'react'
import{PokeContainer,PokeImage,PokeInfo} from './pokeCardElements'

export const PokeCard = (props) => {
    return (
    <PokeContainer>
        <PokeImage img={props.image}>
            
        </PokeImage>
        <PokeInfo>
            {props.children}
        </PokeInfo>
    </PokeContainer>
    )
}
