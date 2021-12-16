import React, { Component } from "react";
import Head from "next/head";
import Banner from "../components/Header/Banner";
import TopExecutive from "../components/Row/TopExecutive";
import Layout from "../components/Layout";
import { Solutions } from "../components/Row/Solutions";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Head>
          <title>Blue Mountain - Home </title>
        </Head>
        <Banner
          home
          bgImage="home"
          title1="The Path to Leadership Starts Here"
          subtitle="More about Blue Mountain >"
        />
        <TopExecutive />
        <Solutions />
      </Layout>
    );
  }
}
