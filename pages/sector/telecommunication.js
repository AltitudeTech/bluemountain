import React, { Component } from "react";
import Head from "next/head";
import Banner from "../../components/Header/Banner";
import SectorBody from "../../components/Sector/SectorBody";
import Layout from "../../components/Layout";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Head>
          <title>Telecommunication</title>
        </Head>
        <Banner bgImage="telecommunication" title="TELECOMMUNICATIONS" />
        <SectorBody />
      </Layout>
    );
  }
}
