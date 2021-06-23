import React from "react";
import { Jumbotron } from "reactstrap";
import Link from "next/link";
import Nav from "./Nav";

const Banner = props => {
  const banner = props.bgImage || "headerbg";
  return (
    <div>
      <Jumbotron
        className="jumboDemo"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          // backgroundImage: `url(/static/svgs/images/${banner}.svg)`,
          backgroundImage: `linear-gradient(180deg, #282828 0%, rgba(40, 40, 40, 0) 100%), ${
            props.min
              ? `url(/static/images/banner/${banner}.jpg)`
              : `url(/static/svgs/images/${banner}.svg)`
          }`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "0px",
          paddingBottom: "0.5rem",
          paddingTop: "0px",
          minHeight: "80vh",
          padding: "0px"
        }}
      >
        <Nav />
        <div style={{ marginLeft: "20px" }}>
          <h1
            className="display-5 mt-5"
            style={{
              color: "#fff",
              textTransform: "uppercase",
              fontWeight: "bold"
            }}
          >
            {props.title1}
            <br /> {props.title2}
          </h1>

          <p>
            <Link href="/about" prefetch>
              <a
                style={{
                  color: "yellow",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  textDecoration: "none"
                }}
              >
                {props.subtitle}
              </a>
            </Link>
          </p>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Banner;
