import React from 'react'
import styled from 'styled-components'
import NFTsPreview from '../../assets/Home Video.mp4';

const VideoContainer = styled.div`
width: 100%;
video{
    width: 100%;
    height: auto;
}

@media (max-width: 64em) {
  min-width: 40vh;
}
`;

function CoverVideo() {
  return (
    <VideoContainer>
        <video src={NFTsPreview} type="video/mp4" autoPlay muted loop playsInline />
    </VideoContainer>
  )
}

export default CoverVideo