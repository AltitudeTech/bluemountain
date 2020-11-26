import React, { Component } from "react";
import Head from "next/head";
import Link from "next/link";
import Banner2 from "../../components/cn/Header/Banner2";
import SvgLoader from "bv-react-svgloader";
import FooterTop from "../../components/cn/Row/FooterTop";
import Layout from "../../components/cn/Layout";
import InsightArray from "../../components/cn/About/InsightArray";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Head>
          <title>Blue Mountain Consulting Network - Insight </title>
        </Head>
        <Banner2
          jpg
          bgImage="talktous"
          title1="TALK TO US"
          subtitle="Take advantage of the expertise and flexibility provided by independent consultants."
        />
        <InsightArray />
        <FooterTop>
          <div style={{ display: "flex", marginTop: "40px" }}>
            <SvgLoader src="/static/svgs/images/cn/emailBlue.svg" />
            <div
              style={{
                width: "40%",
                marginLeft: "40px"
              }}
            >
              <h2>Blue Mountain Newsletter </h2>
              <p>
                Aliquam ante. Nunc dapibus tortor vel mi dapibus sollicitudin.
                Nulla quis diam. Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam.
              </p>
              <p>
                <Link href="/consulting-network/newsletter" prefetch>
                  <a
                    style={{
                      backgroundColor: "#E5CE00",
                      color: "#000",
                      fontSize: "15px",
                      padding: " 5px 10px ",
                      display: "inline-block",
                      borderRadius: "5px",
                      textDecoration: "none"
                    }}
                  >
                    Sign Up To Our Newsletter
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </FooterTop>
      </Layout>
    );
  }
}
