import { createGlobalStyle } from "styled-components";
import "@fontsource/akaya-telivigala"
import "@fontsource/sora"

const Global = createGlobalStyle `
    // *{
    //     outline: 1px solid red;
    // }
    *,*::before, *::after, h1, h2, h3, h4, h5, h6 {
        margin:0;
        padding:0;
    } 
    body{
        font-family: 'Sora', sans-serif;
        overflow-x: hidden;
    }
    a{
        color: inherit;
        text-decoration: none;
    }
    .mobile{
        display: none;
    }

    @media (max-width: 64em){
        .mobile{
            display: inline-block;
        }
        .desktop{
            display: none;
        }
    }
`;
export default Global;