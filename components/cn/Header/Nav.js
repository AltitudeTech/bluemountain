import React from "react";
import Link from "next/link";
import SvgLoader from "bv-react-svgloader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faSearch,
  faPhone,
  faHome,
  faBars
} from "@fortawesome/fontawesome-free-solid";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const baseUrl = "/consulting-network";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar expand="md">
          <NavbarBrand>
            <Link href="/consulting-network">
              <a>
                <SvgLoader src="/static/svgs/images/yellowmount.svg" />
              </a>
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">
                  <FontAwesomeIcon icon={faHome} size="md" color="#fff" />
                  <div style={{ width: "20px" }} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">
                  <FontAwesomeIcon icon={faSearch} size="md" color="#fff" />
                  <div style={{ width: "20px" }} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">
                  <FontAwesomeIcon icon={faEnvelope} size="md" color="#fff" />
                  <div style={{ width: "20px" }} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">
                  <FontAwesomeIcon icon={faPhone} size="md" color="#fff" />
                  <div style={{ width: "20px" }} />
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <FontAwesomeIcon icon={faBars} size="lg" />
                  <div style={{ width: "20px" }} />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link href={`${baseUrl}`}>
                      <a>Home</a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link href={`${baseUrl}/what-we-do`}>
                      <a>What We Do</a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link href={`${baseUrl}/what-we-think`}>
                      <a>What We Think</a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link href={`${baseUrl}/about-us`}>
                      <a>About Us</a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link href={`${baseUrl}/talk-to-us`}>
                      <a>Talk To Us</a>
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <style jsx>
          {`
            a,
            a:hover,
            a:active,
            a:visited {
              text-decoration: none;
              color: #000;
            }
          `}
        </style>
      </div>
    );
  }
}
