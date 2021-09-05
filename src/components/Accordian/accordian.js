import React,{useState, useRef} from 'react'
import {Container,Button,Content,ContentWrapper} from './accoridanElements'



export const Accordian = (props) => {
    const contentRef = useRef(null);
    const [height,setHeight] = useState(0);

    function toggles(){
        const heightToggle = height? setHeight(0): setHeight(contentRef.current.offsetHeight);
    }
    return (
        <>
            <Container className={props.class}>
                <Button onClick={toggles}>
                    {props.name}
                    
                </Button>
                <ContentWrapper height={height}>
                <Content ref={contentRef} height="auto">
                    {props.children}
                </Content>
                </ContentWrapper>
            </Container>
        </>
    )
}

// export default Accordian;