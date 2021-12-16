import React from "react";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import "./hamburger.scss";

const CustomHamburger = () => {
  return (
    <>
      <div className="customBurger">
        <span></span>
        <span></span>
        <span className="menuText">MENU</span>
      </div>
      <style jsx>{`
        .customBurger {
          color: #fff;
          border: none !important;
          outline: none;
        }
        .customBurger span:not(:last-child) {
          background-color: #fff;
          display: block;
          width: 100%;
          height: 2px;
          margin-bottom: 6px;
        }
        .customBurger .menuText {
          font-size: 7px;
          text-align: center;
          display: block;
          width: 100%;
          letter-spacing: 2px;
          font-weight: 600;
        }
      `}</style>
    </>
  );
};

const Hamburger = (props) => {
  return (
    <Menu right customBurgerIcon={<CustomHamburger />}>
      {SiteLinks.map((link, index) => {
        return (
          <Link href={link.url} key={index}>
            <a className="menu-item">{link.label}</a>
          </Link>
        );
      })}
    </Menu>
  );
};

export default Hamburger;

const SiteLinks = [
  { label: "HOME", url: "/" },
  { label: "ABOUT", url: "/about" },
  { label: "SOLUTIONS", url: "/solutions" },
  // { label: "FUNCTIONS", url: "/functions" },
  { label: "PARTNERS", url: "/partners" },
  // { label: "FEATURED VACANCIES", url: "/featured-vacancies" },
  { label: "CONTACT US", url: "/contact" },
];
