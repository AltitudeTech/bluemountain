import React, { Component, Fragment } from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import "./footer.scss";
import SvgLoader from "bv-react-svgloader";
export default class Footer extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div>
          <footer>
            <Container fluid className="m-0">
              <Row>
                <Col md={2} xs={12}>
                  <p style={{ fontSize: "14px" }}>Quick Links</p>
                  <ul>
                    <li>
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">
                        <a>About</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/solutions">
                        <a>Solutions</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/functions">
                        <a>Functions</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/sectors">
                        <a>Sectors</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/bmtn">
                        <a>Blue Mountain TV Network</a>
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col md={2} xs={12}>
                  <p style={{ fontSize: "14px" }}>Navigation Links</p>
                  <ul>
                    <li>
                      <Link href="/partners">
                        <a>Partner</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/insights">
                        <a>Insight</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/organisational-consulting">
                        <a>Organisational Consulting</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/featured-vacancies">
                        <a>Featured Vacancies</a>
                      </Link>
                    </li>
                  </ul>
                </Col>
                <Col md={2} xs={12}>
                  <p style={{ fontSize: "14px" }}>Follow Us </p>
                  <div className="socials">
                    <div className="linkedIn">
                      <img src="/static/social/linkedin.png" />
                    </div>
                    <div className="youtube">Y</div>
                    <div className="twitter">
                      <img src="/static/social/twitter.png" />
                    </div>
                  </div>
                  <div style={{ display: "block", marginTop: "20px" }}>
                    <Link href="/newsletter" prefetch>
                      <a
                        style={{
                          backgroundColor: "#E5CE00",
                          color: "#000",
                          fontSize: "12px",
                          padding: " 5px 10px ",
                          display: "block",
                          borderRadius: "5px",
                          textDecoration: "none",
                          textTransform: "uppercase",
                          textAlign: "center",
                        }}
                      >
                        Sign Up To Our Newsletter
                      </a>
                    </Link>
                  </div>
                </Col>
                <Col md={3} xs={12} className="bmcn mt-3">
                  <Link href="/consulting-network">
                    <a>
                      <SvgLoader
                        className="img-fluid"
                        src="/static/svgs/images/yellowmount.svg"
                      />
                    </a>
                  </Link>
                </Col>
                <Col md={2} xs={12} className="bmcn">
                  <div className="mb-5">
                    {!this.props.university && (
                      <Link href="/university">
                        <a>
                          <img
                            className="img-fluid"
                            src="/static/images/footer/bmu.png"
                          />
                        </a>
                      </Link>
                    )}
                  </div>
                </Col>
              </Row>
            </Container>
          </footer>
          <Container fluid className="py-3 footerLogo">
            <Row>
              <Col xs={12} className="">
                <Link href="/">
                  <a style={{ maxWidth: "200px", paddingRight: "20px" }}>
                    <SvgLoader src="/static/svgs/images/logo.svg" />
                  </a>
                </Link>
                <p
                  style={{
                    marginTop: "20px",
                    display: "inline-block",
                    color: "#fff",
                  }}
                >
                  <Link href="/privacy-policy">
                    <a>Privacy Policy </a>
                  </Link>
                  |
                  <Link href="/terms-and-condition">
                    <a>Terms and Condition</a>
                  </Link>
                  Blue Mountain 2021. All Rights Reserved.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}
