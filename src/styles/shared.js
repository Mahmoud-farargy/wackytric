import styled from "styled-components";
export const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: ${props => props.mode === 'dark' ? props.theme.body : props.theme.text};
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
border-bottom: 2px solid ${props => props.mode === 'dark' ? props.theme.body : props.theme.text};
width: fit-content;
z-index: 4;

@media (max-width: 64em){
    font-size: ${props => props.theme.fontxl};
}

`;