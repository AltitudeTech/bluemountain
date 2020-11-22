import React, { Component } from "react";
import Banner from "../components/Header/Banner";
import Layout from "../components/Layout";
import AboutText from "../components/About/AboutText";
import Global from "../components/Global/Global";
import ManagementRow from "../components/Management/managementRow";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Banner bgImage="about" min />
        <AboutText title="ABOUT US" />
        <ManagementRow title="Management Team" />
      </Layout>
    );
  }
}
