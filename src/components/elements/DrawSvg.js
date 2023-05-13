import React, { useRef, useLayoutEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import Vector from '../../Icons/Vector';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const VectorContainer = styled.div`
position: absolute;
top: 0.5rem;
left: 50%;
transform: translateX(-50%);
width: 100%;
height: 100%;
overflow: hidden;

svg{
    display: inline-block;
    width: 100%;
    height: 100%;

}   
@media (max-width: 48em){
    left:1rem;
}
`;

const Blink = keyframes`
 from {transform: translateX(-50%) scale(0.5)}
 to {transform: translateX(-50%) scale(1)}

`;
const Ball = styled.div`
position: absolute;
top: 0rem;
left: 50%;
transform: translateX(-50%);
width: 1.5rem;
height: 1.5rem;
border-radius: 50%;
background-color: ${props => props.theme.text};
animation: ${Blink} 0.5s linear infinite alternate;

@media (max-width: 48em){
    left:1rem;
} 
`;

function DrawSvg() {
    const elementRef = useRef(null);
    const BallRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
        let element = elementRef.current;
        let svg = document.getElementsByClassName("svg-path")[0];

        const length = svg.getTotalLength();

        //  start positioning of svg drawing
        svg.style.strokeDasharray = length;
        // hide svg before scrolling start
        svg.style.strokeDashoffset = length;
        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: 'top center',
                end: 'bottom bottom',
                onUpdate: (self) => {
                    const draw = length * self.progress;
                    //also reserve the drawing when scroll goes up
                    svg.style.strokeDashoffset = length - draw;
                },
                onToggle: self => {
                    if (self.isActive) {
                        BallRef.current.style.display = 'none';
                    } else {
                        BallRef.current.style.display = 'inline-block';
                    }
                }
            }
        })
        return () => {
            if (t1) {
                t1.kill();
            }
        }
    }, []);
    return (
        <>
            <Ball ref={BallRef} />
            <VectorContainer ref={elementRef}>
                <Vector />
            </VectorContainer>
        </>


    )
}

export default DrawSvg