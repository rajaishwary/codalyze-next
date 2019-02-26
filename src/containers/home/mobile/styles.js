import styled from "styled-components";
import * as global from "../../../utils/globalStyles";

export const pageWrapper = styled.div``;

export const title = styled.h1`
  ${global.mobileTitle}
  color: #000;
  margin: 0 0 15px;
`;

export const p = styled.p`
  ${global.mobileparagraph}
  color: #000;
`;

export const greenBtn = styled.button`
  ${global.mobileButton}
  margin: 0 auto;
  display: block;
`;

export const HomeMobileBgSvg = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  top: 41%;
  z-index: -1;
  svg {
    width: 100%;
    height: auto;
  }
  .a {
    opacity: 0.4;
  }
`;

export const strategyRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 35px;
`;

export const strategyBlockOne = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 50px;
  margin-left: -10px;
  padding: 25px 0;
`;

export const strategyBlockTwo = styled.div``;

export const strategyInfoNum = styled.h3`
  color: #fff;
  font-size: 25px;
`;

export const strategySubTitle = styled.h4`
  ${global.fontRobotoLight};
  color: #1e1e1e;
  font-size: 24px;
  margin: 0 0 50px;
  line-height: 35px;
  letter-spacing: 1px;
  font-weight: inherit;
`;

export const strategyStatsBlock = styled.div`
  margin-bottom: 25%;
`;

export const strategyStats = styled.div`
  text-align: center;
`;

export const strategyStatsNum = styled.h5`
  ${global.fontRobotoLight};
  color: #111111;
  font-size: 28px;
  margin: 0 0 0px;
`;

export const strategyStatsTitle = styled.h6`
  ${global.mobileparagraph};
`;

export const splTitleSection = styled.div`
  padding: 85px 35px 20px;
`;

export const splRow = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
  padding: 0px 0 60px 35px;
`;

export const splAreasBlocks = styled.div`
  width: 214px;
  margin-right: 20px;
  border: 1px solid rgba(208, 192, 192, 0.5);
  box-shadow: 0px 3px 2px #e1e1e2;
  background: #fff;
  padding: 0px 15px 42px;
`;

export const splAreasImage = styled.img`
  ${global.CenterImg};
  width: 110px;
  height: 80px;
  padding: 31px 0 51px;
`;

export const splAreasTitle = styled.h6`
  ${global.fontRobotoMedium}
  width: 182px;
  font-size: 20px;
  text-align: center;
  margin: 0 0 10px;
`;

export const testimonialMobileRow = styled.div`
  padding: 86px 0 15px 35px;
`;

export const testimonialListMob = styled(splRow)`
padding: 0px 0 60px 0px;
`;

export const testimonialBlockMob = styled(splAreasBlocks)`
  
`;

export const testimonialImageMob = styled.img`
  ${global.CenterImg};
  width: 63px;
  height: 63px;
  padding: 31px 0 51px;
`;

export const testimonialTitleMob = styled(splAreasTitle)`
  width: inherit;
`;

export const testimonialInfoMob = styled.h6`
  ${global.fontRobotoRegular}
  font-size: 15px;
  margin: 0 0 15px;
  text-align: center;
`;