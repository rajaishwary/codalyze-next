import React, { Component, Fragment } from "react";
import * as Styled from "./styles";
import Banner from "../../../components/HomeBannerMobile";
import WhoWeAre from "./whoWeAre";
import AboutComponent from "./aboutComponent";
import TeamMobile from "./team";
import Footer from "../../../components/footer-mobile";
import Star from "./images/star";
import HighTechBg from "./images/highTechBg";
import LoveBg from "./images/loveBg";

export default class AboutUsMobile extends Component {
  render() {
    return (
      <Fragment>
        <Banner
          banner="/static/images/mobile/about/aboutUsMobileBanner.svg"
          title="Meet the"
          secondryTitle="team behind it"
          subTitle="We aid you in achieving a tight deadline and help you get to market fast."
          titleBreak
        />
        <WhoWeAre />
        <Styled.pageWrapper>
          <Styled.optBgContainer>
            <Star width="100%" height="100%" viewBox="0 0 158.595 154.538" />
          </Styled.optBgContainer>
          <AboutComponent
            headingOne="Optimize"
            headingTwo="Approach"
            content="We aid you in achieving a tight deadline and help you get to market fast. We design and develop web and mobile apps for growth-minded companies - both startups and big enterprises."
            image="/static/images/mobile/about/optimizeMobile.png"
          />
        </Styled.pageWrapper>

        <Styled.pageWrapper>
          <Styled.highBgContainer>
            <HighTechBg
              width="100%"
              height="100%"
              viewBox="100 0 300.267 758.327"
            />
          </Styled.highBgContainer>
          <AboutComponent
            headingOne="High Tech,"
            headingTwo="Low Risk"
            content="Building custom software is risky and hard, but there’s a way to stack those odds in your favour. It’s all about the right people and process. We create hands-on partnerships with our clients and share a proven process we’ve honed over successful software projects."
            image="/static/images/mobile/about/hightechMobile.png"
          />
        </Styled.pageWrapper>
        <Styled.pageWrapper>
          <Styled.focusedBgContainer>
            <Star width="100%" height="100%" viewBox="0 0 158.595 154.538" />
          </Styled.focusedBgContainer>
          <AboutComponent
            headingOne="Focused"
            headingTwo="Product Teams"
            content="You’ll be working with a small, dedicated team built to fit the needs of your project. Enjoy deep focus and productive relationships. Partner with us and we'll make your code and team better."
            image="/static/images/mobile/about/teamMobile.png"
          />
        </Styled.pageWrapper>
        <Styled.pageWrapper>
            <Styled.loveBgContainer>
                <LoveBg 
                 width="100%" height="100%" viewBox="100 0 370.462 515.44"
                />
            </Styled.loveBgContainer>
          <AboutComponent
            headingOne="We Love"
            headingTwo="Start-Ups"
            contentTwo="We share your passion for changing the world"
            contentThree="We've helped ideas grow in the past and it feels beautiful"
            contentFour="If you run a start-up and are looking for a tech partner, please say Hi!"
            image="/static/images/mobile/about/startupMobile.png"
            hide
            multiple
          />
        </Styled.pageWrapper>
        <TeamMobile />
        <Footer />
      </Fragment>
    );
  }
}