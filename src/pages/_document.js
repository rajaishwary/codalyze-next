import Document, { Head, Main, NextScript } from "next/document";
import Helmet from "react-helmet";
import { GtagNoscript, GtagScript } from "../utils/gtag";

import { ServerStyleSheet } from "styled-components";
import transitionStyles from "../styles/transitions";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags, helmet: Helmet.renderStatic() };
  }

  get helmetHeadComponents() {
    return Object.keys(this.props.helmet)
      .filter(
        el =>
          el !== "htmlAttributes" && el !== "bodyAttributes" && el !== "title"
      )
      .map(el => this.props.helmet[el].toComponent());
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <GtagScript />
          {this.helmetHeadComponents}
          {this.props.styleTags}
          <style dangerouslySetInnerHTML={{ __html: transitionStyles }} />
          <meta name="theme-color" content="#55a7a2" />
          <link rel="icon" href="/static/favicon.ico" sizes="120x120" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=0"
            data-reactid="4"
          />
          <link rel="manifest" href="/static/manifest.json" />
        </Head>
        <body>
          <div id="fb-root" />
          <div
            className="fb-customerchat"
            attribution="setup_tool"
            page_id="174982912932333"
          />
          <GtagNoscript />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
