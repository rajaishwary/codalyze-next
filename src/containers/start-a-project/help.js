import React from "react";
import * as Styled from "./styles";

const helpIcons = [
  {
    image: "/static/images/start-a-project/webDevelopment.svg",
    subtitle: "Web Development"
  },
  {
    image: "/static/images/start-a-project/backend-architechture.svg",
    subtitle: "Backend Architechture"
  },
  {
    image: "/static/images/start-a-project/app-development.svg",
    subtitle: "App Development"
  },
  {
    image: "/static/images/start-a-project/not-sure.svg",
    subtitle: "Not sure",
    paragraph: "We will provide you with free consultation"
  }
];

export default class Help extends React.Component {
  render() {
    return (
      <Styled.containerFluid>
        <Styled.container>
          <Styled.title>How can we help you?</Styled.title>
          <Styled.imageBlocksRow>
            {helpIcons.map((icons, index) => (
              <Styled.singleImageBlocks key={index}>
                <Styled.blockShadow>
                  <Styled.blockImages src={icons.image} />
                </Styled.blockShadow>
                <Styled.subtitle>{icons.subtitle}</Styled.subtitle>
                <Styled.paragraph>{icons.paragraph}</Styled.paragraph>
              </Styled.singleImageBlocks>
            ))}
          </Styled.imageBlocksRow>
        </Styled.container>
      </Styled.containerFluid>
    );
  }
}