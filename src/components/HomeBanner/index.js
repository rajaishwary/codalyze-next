import React from "react";
import * as Styled from "./styles";

export default ({title, subTitle, banner, titleBreak, secondryTitle, rowReversed}) => (
  <Styled.FlexContainer rowReversed={rowReversed}>
    <Styled.twoBlocks>
      <Styled.mainTitle>
       {title}
      </Styled.mainTitle>
      {titleBreak ? <Styled.mainTitle>
       {secondryTitle}
      </Styled.mainTitle> : null}
      <Styled.subTitle>
        {subTitle}
      </Styled.subTitle>
    </Styled.twoBlocks>
    <Styled.twoBlocks rowReversed={rowReversed}>
      <Styled.bannerImage src={banner} />
    </Styled.twoBlocks>
  </Styled.FlexContainer>
);
