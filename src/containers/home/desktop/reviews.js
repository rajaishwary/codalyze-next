import React from "react";
import * as Styled from "./styles";
import Link from "next/link";
import LazyLoad from "react-lazyload";

const StartProject = ({ href }) => (
  <Link href={href} passHref prefetch>
    <Styled.reviewsProject>START A PROJECT</Styled.reviewsProject>
  </Link>
);

const KMReview = ({ showOnSmallScreen }) => (
  <Styled.reviewSingle showOnSmallScreen={showOnSmallScreen}>
    <LazyLoad height={214} once offset={100}>
      <Styled.reviewImage src="/static/images/home/khelomore.png" />
    </LazyLoad>
    <Styled.reviewImageTitle>KheloMore</Styled.reviewImageTitle>
    <Styled.reviewImageContent>
      Founded by former Indian cricketer, athelete and Sports Managing Head for
      Nike, Jatin Paranjape, KheloMore is a digital platform bringing together
      young atheletes and coaches / academies online for an exceptional
      performance off-line.
    </Styled.reviewImageContent>
  </Styled.reviewSingle>
);

const Reviews = () => (
  <Styled.reviewsRow>
    <Styled.FlexContainer>
      <Styled.reviewsSection>
        <Styled.reviewsBlock>
          <Styled.reviewsTitle>
            We have worked with some <br /> amazing founders <br />
            and startups
          </Styled.reviewsTitle>
          <Styled.reviewsSubTitle>
            Deep focus and productive
            <br /> relationships is something we cherish.
            <br /> Partner with us and experience a difference.
          </Styled.reviewsSubTitle>
          <StartProject href={"/start-a-project"} />
        </Styled.reviewsBlock>
        <Styled.reviewsBlock>
          <Styled.reviewImageBlocks>
            <Styled.reviewSingle>
              <LazyLoad height={214} once offset={100}>
                <Styled.reviewImage src="/static/images/home/betking.png" />
              </LazyLoad>
              <Styled.reviewImageTitle>BetKing</Styled.reviewImageTitle>
              <Styled.reviewImageContent>
                BetKing is one of the most trusted online crypto casino and
                exchange (raised $6.5 million in ICO)
              </Styled.reviewImageContent>
            </Styled.reviewSingle>
            <Styled.reviewSingle>
              <LazyLoad height={214} once offset={100}>
                <Styled.reviewImage
                  src="/static/images/home/lcs.jpg"
                  width="324"
                />
              </LazyLoad>
              <Styled.reviewImageTitle>
                Barnes and Noble LoudCloud
              </Styled.reviewImageTitle>
              <Styled.reviewImageContent>
                LoudCloud builds software that improves learning. Acquired by
                Barnes and Noble in 2016.
              </Styled.reviewImageContent>
            </Styled.reviewSingle>
            <KMReview showOnSmallScreen />
          </Styled.reviewImageBlocks>
          <Styled.reviewImageBlocks hideOnSmallScreen>
            <KMReview />
          </Styled.reviewImageBlocks>
        </Styled.reviewsBlock>
      </Styled.reviewsSection>
    </Styled.FlexContainer>
  </Styled.reviewsRow>
);

export default Reviews;
