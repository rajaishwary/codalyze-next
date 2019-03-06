import styled, { css, keyframes } from "styled-components";
import {media} from "../../../utils/globalStyles";
import WebDev from './images/WebDev';
import BackendDev from './images/BackendDev';
import MobileAppDev from './images/MobileAppDev';
import Performance from './images/Performance';
import Responsive from './images/Responsive';
import Reusable from './images/Reusable';
import FastDevelopment from './images/FastDevelopment';
import OverTheAir from './images/OverTheAir';
import * as global from "../../../utils/globalStyles";

const rotateArrow = keyframes`
  0% {
    transform: rotate(15deg);
  }

  50% {
    transform: rotate(54deg);
  }

  100% {
    transform: rotate(15deg);
  }
`;

const translatePie = keyframes`
  0% {
    transform: translate(0, -25px);
  }
  50% {
    transform: translate(0, 0px);
  }
  100% {
    transform: translate(0, -25px);
  }
`;

const translateSquare11 = keyframes`
  0% {
    transform: rotate(0deg) translate(-15px, 14px);
  }
  50% {
    transform: rotate(53.7deg) translate(0px, 0px);
  }
  100% {
    transform: rotate(0deg) translate(-15px, 14px);
  }
`;

const translateSquare23 = keyframes`
  0% {
    transform: rotate(0deg) translate(-15px, 12px);
  }
  50% {
    transform: rotate(37.36deg) translate(0px, 0px);
  }
  100% {
    transform: rotate(0deg) translate(-15px, 12px);
  }
`;

const translateSquare13 = keyframes`
  0% {
    transform: rotate(0deg) translate(-48px, 41px);
  }
  50% {
    transform: rotate(-6deg) translate(0px, 0px);
  }
  100% {
    transform: rotate(0deg) translate(-48px, 41px);
  }
`;

const overTheAirAnimation = keyframes`
  0% {
    transform: rotate(-3deg);
  }
  50% {
    transform: rotate(3deg);
  }
  100% {
    transform: rotate(-3deg);
  }
`;

export const PerformanceImage = styled(Performance)`
  .performance_svg__arrow {
    animation: ${rotateArrow} 4s linear infinite;
    transform-origin: 250px 317px;
  }
`;

export const ResponsiveImage = styled(Responsive)`
`;

export const ReusableImage = styled(Reusable)`
  .reusable_svg__pie {
    animation: ${translatePie} 5s ease-in-out infinite;
  }
`;

export const FastDevelopmentImage = styled(FastDevelopment)`
  .square-11 {
    animation: ${translateSquare11} 12s ease-in-out infinite;
    transform-origin: 243.356px 137.449px;
  }
  .square-23 {
    animation: ${translateSquare23} 12s ease-in-out infinite;
    transform-origin: 350.443px 248.76px;
  }
  .square-13 {
    animation: ${translateSquare13} 12s ease-in-out infinite;
  }
`;

export const OverTheAirImage = styled(OverTheAir)`
  .airplane {
    animation ${overTheAirAnimation} 8s ease-in-out infinite;
  }
`;


export const bannerSvg = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  top: 300px;
  z-index: -1;
  svg {
    width: 100%;
    height: auto;
  }
  .a {
    opacity: 0.4;
  }
`;

export const bottomSvg = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 300px;
  z-index: -1;
  // svg {
  //   width: 100%;
  //   height: auto;
  // }
  // .a {
  //   opacity: 0.4;
  // }
`;

export const section = styled.section`
  margin: 80px auto 150px;
`;

export const contentsFromLeft = styled.div`
  position: relative;
  background-color: white;
  box-sizing: border-box;
  width: 80%;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  font-weight: 300;
  ${props => props.isRightAligned ? `
    left: 20%;
    padding: 80px 6vw 80px 6vw;
    h2, p {
      padding-left: 200px;
    }
    li {
      padding-left: 200px;
      p {
        padding-left: unset;
      }
    }
  ` : `
    left: initial;
    padding: 80px 2vw 80px 6vw;
    h2, p {
      padding-right: 200px;
    }
  `};

  ${media.tablet`
    padding-right: 6vw;
    width: 100%;
  `}
`;

// export const StickyContainerDiv = styled(StickyContainer)`
//   display: block;
//   width: 100%;
//   position: relative;
// `;

export const stickyDiv = styled.div`
  position: absolute;
  right: 10px;
  height: 410px;
`;

export const StyledContentImage = css`
  position: absolute;
`;

export const WebDevImage = styled(WebDev)`
`;

export const MobileAppDevImage = styled(MobileAppDev)``;

export const BackendDevImage = styled(BackendDev)``;


export const WebDevImageContainer = styled.div`
  position: absolute;
  top: 100px;
  ${props => props.isRightAligned ? 'left: -200px' : 'right: -200px'};
`

export const contentsFromRight = styled.div``;

export const h2 = styled.h2`
${global.fontFreightDispBold};
  font-size: 50px;
`;

export const h3 = styled.h3`
${global.fontFreightDispBold};
  font-size: 30px;
  margin-top: 0;
`;

export const h4 = styled.h4`
`;

export const p = styled.p`
${global.fontRobotoLight};
  font-size: 24px;  
  font-weight: 300;
  text-align: justify;
`;
export const ul = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 0;
`;

export const li = styled.li`
  margin: 60px 2vw;
  font-size: 20px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  p {
    font-size: 20px;
  }
  ${media.tablet`
    flex-flow: column nowrap;
    align-items: flex-start;
  `}
`;

export const liImage = styled.div`
  width: 10vw;
  margin-right: 4vw;
  flex-grow: 0;
  flex-shrink: 0;
  svg {
    width: 8vw;
    min-width: 150px;
  }
`;

export const liContent = styled.div`
`;

export const pageWrapper = styled.div`
  position: relative;
`;