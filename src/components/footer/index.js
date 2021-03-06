import React from "react";
import Link from "next/link";
import * as Styled from "./styles";
import LazyLoad from "react-lazyload";
import FooterMobile from "../footer-mobile";

const footerLinks = [
  {
    name: "Work",
    href: "work"
  },
  {
    name: "Services",
    href: "services"
  },
  {
    name: "About",
    href: "about-us"
  },
  {
    name: "Career",
    href: "career"
  },
  {
    name: "Start a project",
    href: "start-a-project"
  },
  {
    name: "App Development",
    href: "app-development"
  }
  // {
  //   name: "Contract Staffing",
  //   href: "contract-staffing"
  // }
];

class FooterLink extends React.Component {
  render() {
    const { href, name, linkRef, active } = this.props;
    return (
      <Link href={href} passHref prefetch>
        <Styled.ul>
          <Styled.li ref={linkRef}>{name}</Styled.li>
        </Styled.ul>
      </Link>
    );
  }
}

export default class Footer extends React.PureComponent {
  render() {
    const { top, width, left, right, href, mq } = this.props;
    return mq === "desktop" ? (
      <Styled.containerFluid>
        <Styled.container>
          <Styled.footerRow>
            <Styled.footerPages>
              {footerLinks.map((x, index) => {
                return (
                  <FooterLink href={`/${x.href}`} name={x.name} key={index} />
                );
              })}
            </Styled.footerPages>
            <Styled.footerContent>
              <Styled.h3>Reach Us At :</Styled.h3>
              <Styled.h4>
                Work Square, 1st Floor, Urmi
                <br /> Corporate Park, Near Solaris - D,
                <br /> Opp. L&T Gate - 6, Saki Vihar Road,
                <br /> Chandivali, Mumbai,
                <br /> Maharashtra 400072
              </Styled.h4>
              <Styled.h3>Connect with us</Styled.h3>
              <Styled.socialImages>
                <LazyLoad height={20} offset={100} once>
                  <Styled.img src="/static/images/footer/fb.png" />
                </LazyLoad>
                <LazyLoad height={20} offset={100} once>
                  <Styled.img src="/static/images/footer/instagram.png" />
                </LazyLoad>
                <LazyLoad height={20} offset={100} once>
                  <Styled.img src="/static/images/footer/linkedin.png" />
                </LazyLoad>
                <LazyLoad height={20} offset={100} once>
                  <Styled.img src="/static/images/footer/twitter.png" />
                </LazyLoad>
              </Styled.socialImages>
              <Styled.contactUs href="mailto: mail@codalyze.com">
                mail@codalyze.com
              </Styled.contactUs>
              <br />
              <Styled.h4>
                Gaurav Kumar :&nbsp;
                <Styled.contactUs href="telto: +91-8940-544033">
                  +91-8940-544033
                </Styled.contactUs>
              </Styled.h4>
            </Styled.footerContent>
          </Styled.footerRow>
        </Styled.container>
      </Styled.containerFluid>
    ) : (
      <FooterMobile {...this.props} />
    );
  }
}
