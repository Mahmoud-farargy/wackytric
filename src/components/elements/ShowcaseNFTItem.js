import React, { memo } from 'react'
import styled from 'styled-components'
import ETH from "../../assets/icons8-ethereum-48.png";

const ImgContainer = styled.div`
width: 15rem;
margin: 0 1rem;
background-color: ${props => props.theme.body};
border-radius: 20px;
cursor: pointer;
@media (max-width: 48em){
    width: 12em;
}
@media (max-width: 30em){
    width: 10em;
}
img{
    width: 100%;
    height: auto;
    object-fit: contain;
}
`;

const Details = styled.div`
display: flex;
justify-content: space-between;
padding: 0.8rem 1rem;
background-color: ${props => props.theme.text};
border: 2px solid ${props => `rgba(${props.theme.bodyRgba}, 0.5)`};
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;

span{
    font-size:${props=> props.theme.fontsm};
    color: ${props => `rgba(${props.theme.bodyRgba}, 0.5)`};
    font-weight:600;
    line-height: 1.5rem;
    @media (max-width: 30em){
        font-size: ${props => props.theme.fontxs}
    }
}

h1{
    font-size:${props=> props.theme.fontmd};
    color: ${props => props.theme.body};
    font-weight: 600;
    @media (max-width: 30em){
        font-size: ${props => props.theme.fontsm}
    }
}
`;

const Price = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;

img{
    width: 1rem;
    height: auto;
    object-fit: contain;
}
`;
function ShowcaseNFTItem({img, number = 0, price = 0, passRef}) {
    let play = e => {
        passRef.current.style.animationPlayState = 'running';
    }
    let pause = e => {
        passRef.current.style.animationPlayState = 'paused';
    }
  return (
    <ImgContainer onMouseOver={(e) => pause(e)} onMouseOut={(e) => play(e)}>
        <img src={img} loading="lazy" alt="NFT"  />
        <Details>
            <div>
                <span>WackyNFT</span> <br/>
                <h1>#{number}</h1>
            </div>
            <div>
                <span>Price</span>
                <Price>
                    <img src={ETH} alt="ETH" />
                    <h1>{Number(price).toFixed(1)}</h1>
                </Price>
            </div>
        </Details>
    </ImgContainer>
  )
}

export default memo(ShowcaseNFTItem);