import React from "react";
import Link from "next/link";
import SvgLoader from "bv-react-svgloader";
import Hamburger from "./hamburger";
import "./navbar.scss";

export const Nav = (props) => {
  const opacity = props.opacity ? Math.max(props.opacity, 0.2) : 0;
  const borderBottomWidth = props.opacity === 1 ? props.borderBottomWidth : 0;

  return (
    <div
      className="navbar navbar-default fixed-top"
      role="navigation"
      style={{
        opacity,
        borderBottomWidth,
        backgroundColor: "#0069D1",
        zIndex: 999999999999999,
      }}
    >
      <div
        className="container-fluid"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="navbar-header">
          <Link href="/">
            <a className="navbar-brand">
              <SvgLoader src="/static/svgs/images/logo.svg" />
            </a>
          </Link>
        </div>
        <div className="" style={{ display: "flex", alignItems: "center" }}>
          <ContactUs />
          <Hamburger />
        </div>
      </div>
    </div>
  );
};

export const ContactUs = (props) => (
  <div className="contactPhoneBar">
    <Link href="tel:+2348091110386">
      <a className="contactPhone">+234 809 111 0386</a>
    </Link>
    <Link href={props.learningHub ? "/learning/contact" : "/contact"}>
      <a className="contactNav">CONTACT US</a>
    </Link>
  </div>
);

const MyNavbar = () => {
  return (
    <div>
      <Nav opacity={1} borderBottomWidth={2} />
    </div>
  );
};

export default MyNavbar;
