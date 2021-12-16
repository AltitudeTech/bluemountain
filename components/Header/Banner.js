import React from "react";
import { Jumbotron } from "reactstrap";
import Link from "next/link";
import Nav from "./Nav";
import Title from "../About/Title";
import MyNavbar from "./navbar";

const Banner = (props) => {
  const banner = props.bgImage || "headerbg";
  return (
    <div>
      <Jumbotron
        className="jumboDemo"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundImage: `linear-gradient(180deg, #282828 0%, rgba(40, 40, 40, 0) 100%), ${
            props.min
              ? `url(/static/images/banner/${banner}.jpg)`
              : props.home
              ? `url(/static/images/home/${banner}.jpg)`
              : `url(/static/svgs/images/${banner}.svg)`
          }`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: "0px",
          minHeight: `${props.min ? "50vh" : "80vh"}`,
          padding: "0px",
          margin: "0px",
        }}
      >
        <MyNavbar />
        <div>
          <h2
            className="display-4"
            style={{
              color: "#fff",
              textAlign: "center",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            {props.title1}
          </h2>
        </div>
        {props.children}
        <p className="ml-4">
          <Link href="/about" prefetch>
            <a
              style={{
                color: "yellow",
                fontWeight: "bold",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              {props.subtitle}
            </a>
          </Link>
        </p>
        {props.title && <Title title={props.title}>{props.title}</Title>}
      </Jumbotron>
    </div>
  );
};

export default Banner;
