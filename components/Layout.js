import React, { Component, Fragment } from "react";
import Router from "next/router";
import Head from "next/head";
import { Container } from "reactstrap";
import Footer from "../components/Footer/Footer";
import NewsLetter from "./NewsLetter";
import NProgress from "nprogress";
import "../scss/style.scss";
import Topnews from "./Global/Topnews";
import CookieConsent, { Cookies } from "react-cookie-consent";

// progress bar
Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default class extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Head>
          <link rel="stylesheet" href="/static/css/nprogress.css" />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700,800"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/static/css/genericStyles.css" />
        </Head>
        {/* <Topnews /> */}
        <Container className="pr-0 pl-0" fluid>
          {this.props.children}
          {!this.props.noNewsLetter && <NewsLetter />}
          <Footer university={this.props.noUniversity || null} />
        </Container>
        <CookieConsent
          location="bottom"
          buttonText="Sure man!!"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
        >
          This website uses cookies to enhance the user experience.
        </CookieConsent>
      </Fragment>
    );
  }
}
