import React, { Component } from "react";
import ConsultingText from "../../components/Consulting/ConsultingText";
import Global from "../../components/Global/Global";
import Banner from "../../components/Header/Banner";
import Layout from "../../components/Layout";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Banner bgImage="about" min title="STRATEGIC WORKFORCE PLANNING" />
        <ConsultingText />
        <Global title="GLOBAL INSIGHT" />
      </Layout>
    );
  }
}
