import React, { Fragment } from "react";
import Link from "next/link";
import { Container, Col, Row } from "reactstrap";
import { VideoPlayer } from "../Row/Video";

export default (props) => {
  return (
    <Fragment>
      <Container fluid>
        <div className="aboutTitle">
          <h2>{props.title}</h2>
          <div>
            <Row>
              <Col md={6}>
                <div style={{ width: "90%" }}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt illo amet similique repudiandae, dolorem maxime
                    reiciendis aspernatur nesciunt mollitia corrupti ab, fugiat
                    illum est cumque, non placeat tenetur distinctio doloribus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt illo amet similique repudiandae, dolorem maxime
                    reiciendis aspernatur nesciunt mollitia corrupti ab, fugiat
                    illum est cumque, non placeat tenetur distinctio doloribus!
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div style={{ width: "90%" }}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt illo amet similique repudiandae, dolorem maxime
                    reiciendis aspernatur nesciunt mollitia corrupti ab, fugiat
                    illum est cumque, non placeat tenetur distinctio doloribus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt illo amet similique repudiandae, dolorem maxime
                    reiciendis aspernatur nesciunt mollitia corrupti ab, fugiat
                    illum est cumque, non placeat tenetur distinctio doloribus!
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
      <Container>
        <Row>
          <Col md={6}>
            <AboutItem title="Vision" />
          </Col>
          <Col md={6}>
            <AboutItem title="Mission" />
          </Col>
          <Col md={6}>
            <AboutItem title="Structure" />
          </Col>
          <Col md={6}>
            <AboutItem title="Join Us" />
          </Col>
          <Col md={6}>
            <AboutItem title="Partners" />
          </Col>
          <Col md={6}>
            <AboutItem title="Blue Mountain TV" tv />
          </Col>
        </Row>
      </Container>
      <style jsx>
        {`
          .aboutTitle {
            padding: 0 50px;
            margin: 40px 0px;
          }
          .aboutTitle h2 {
            font-weight: bold;
          }
          @media (max-width: 576px) {
            .aboutTitle {
              padding: 0 10px;
              margin: 40px 0px;
            }
            .aboutTitle h2 {
              font-size: 25px;
            }
          }
        `}
      </style>
    </Fragment>
  );
};

const AboutItem = (props) => {
  return (
    <Fragment>
      <div className="aboutItem">
        <h4>{props.title}</h4>
        {!props.tv && (
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
            placeat, error unde eius eum minima, aspernatur corrupti totam
            quisquam nostrum earum commodi, dolore labore dolorem voluptates hic
            officia. Id, ex. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Sunt placeat, error unde eius eum minima, aspernatur corrupti
            totam quisquam nostrum earum commodi, dolore labore dolorem
            voluptates hic officia. Id, ex.
          </p>
        )}
        {/* {props.tv && <VideoPlayer />} */}
        {props.tv && (
          <img className="img img-fluid" src="/static/images/about/tv-3.jpg" />
        )}
        {props.joinNetwork && (
          <Link href="/consulting-network/apply-to-join">
            <a className="joinNetwork">APPLY TO JOIN OUR NETWORK</a>
          </Link>
        )}
      </div>
      <style jsx>{`
        .aboutItem {
          margin: 20px 0;
        }
        .aboutItem h4 {
          color: #0069d1;
          font-weight: bold;
        }
        .aboutItem .joinNetwork {
          text-decoration: none;
          display: inline-block;
          color: #fff;
          border-radius: 30px;
          background-color: #dd071c;
          font-weight: bold;
          padding: 5px 20px;
          margin: 20px auto;
          font-size: 12px;
          text-align: center;
        }
      `}</style>
    </Fragment>
  );
};
