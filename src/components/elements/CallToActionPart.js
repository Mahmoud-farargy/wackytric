import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import Button from "./Button";

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: ${props => props.theme.text};
span{
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
}
.text-1 {
    color: blue;
}
.text-2 {
    color: orange;
}
.text-3 {
    color: red;
}

@media (max-width: 70em) {
    font-size: ${props => props.theme.fontxl};
}
@media (max-width: 48em) {
    align-items: center;
    text-align: center;
}
@media (max-width: 40rem) {
    width: 100%;
}
`;

const SubTitle = styled.h3`
font-size: ${props => props.theme.fontlg};
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
font-weight: 600;
margin-bottom: 1rem;

@media (max-width: 40em) {
    font-size: ${props => props.theme.fontmd};
}
@media (max-width: 48em) {
    align-items: center;
    text-align: center;
}
`;

const Container = styled.div`
align-self: flex-start;
width: 80%;

@media (max-width: 48em) {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    width: 100%;   
    .button-container{
        align-items: center;
        text-align: center;
        button{
            margin: 0 auto;
        }
    }    
}
`;


function TypeWriterText({ mainTitle, typeWriterPhrases, subTitle, btnText, btnLink, delay = 2000 }) {
    return (
        <Container>
            <Title>
                {mainTitle}
                <Typewriter options={{
                    autoStart: true,
                    loop: true
                }} onInit={(typewriter) => {
                    const newObj = typewriter;
                    if (typeWriterPhrases?.length > 0) {
                        typeWriterPhrases.forEach((phrase) => {
                            newObj.typeString(phrase).pauseFor(delay).deleteAll()
                        });
                        newObj.start();
                    }
                }} />

            </Title>
            {subTitle && <SubTitle>
                {subTitle}
            </SubTitle>}
            <Button text={btnText} link={btnLink} /> 
        </Container>

    )
}

export default TypeWriterText