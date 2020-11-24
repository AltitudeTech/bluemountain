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
            <Container fluid>
              <Row>
                <Col md="4" xs="12" className="footerLogo">
                  <Link href="/consulting-network" prefetch>
                    <a>
                      <SvgLoader src="/static/svgs/images/yellowmount.svg" />
                    </a>
                  </Link>
                  <div style={{ marginTop: "20px" }}>
                    <p>
                      <Link href="/privacy-policy">
                        <a>Privacy Policy</a>
                      </Link>
                      |
                      <Link href="/terms-and-condition">
                        <a>Terms and Condition</a>
                      </Link>
                    </p>
                    <p>Blue Mountain 2018. All Rights Reserved.</p>
                  </div>
                </Col>
                <Col md="4" xs="12" className="follow">
                  <h4 style={{ fontWeight: "bold" }}>FOLLOW US</h4>
                  <div className="socials">
                    <div className="linkedIn">
                      <img src="/static/social/linkedin.png" />
                    </div>
                    <div className="google">
                      <img src="/static/social/google.png" />
                    </div>
                    <div className="twitter">
                      <img src="/static/social/twitter.png" />
                    </div>
                  </div>
                </Col>
                <Col md="4" xs="12" className="bmcn">
                  <Link href="/university">
                    <a>
                      <img
                        className="img-fluid"
                        src="/static/images/footer/bmu.png"
                      />
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <SvgLoader src="/static/svgs/images/logo.svg" />
                    </a>
                  </Link>
                </Col>
              </Row>
            </Container>
          </footer>
        </div>
      </Fragment>
    );
  }
}
