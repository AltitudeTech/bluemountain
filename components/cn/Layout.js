import React, { Component, Fragment } from "react";
import Router from "next/router";
import Head from "next/head";
import { Container } from "reactstrap";
import Footer from "./Footer/Footer";
import NProgress from "nprogress";
import "../../scss/style.scss";

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
        </Head>
        <Container
          fluid
          style={{
            paddingLeft: "0px",
            paddingRight: "0px"
          }}
        >
          {this.props.children}
          <Footer />
        </Container>
      </Fragment>
    );
  }
}
