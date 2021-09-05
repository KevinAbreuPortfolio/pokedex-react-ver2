import styled from 'styled-components'



export const Container = styled.div`
width:100%;
height: auto;
:not(:last-child){
    border-bottom: solid darkgray 3px;
    border-top: solid darkgray 3px;
}
`

export const Button = styled.button`
all:unset;
cursor: pointer;
width:100%; 
height: 50px;
padding-left: 2%;
background-color: #dcdcdc;
box-sizing:border-box;
margin:0;
`

export const ContentWrapper = styled.div`
height: ${props => props.height}px;
overflow: hidden;
transition: height .5s ease;
`

export const Content = styled.div`
width:100%;
transition: max-height 1s ease-in-out;
max-height: ${props => props.height};
overflow-y:hidden;
background-color: #ffffff;
padding:2%;
/* font-family:revert; */
`

// Custom Accordian

export const PButton = styled(Button)`
background-color: none;
/* background:  ; */


`