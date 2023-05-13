import React from 'react'
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

function ConfettiComponent() {
    const { width, height} = useWindowSize();
  return (
    <Confetti numberOfPieces={150} gravity={0.01} width={width} height={height * 1.7}/>
  )
}

export default ConfettiComponent