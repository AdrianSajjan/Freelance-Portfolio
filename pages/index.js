import Layout from "layout";
import Head from "next/head";
import { Fragment } from "react";
import { Hero, Skills, About, Blog } from "components/Home";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Adrian Sajjan - Full Stack Developer and Freelancer</title>
      </Head>
      <Layout>
        <Hero />
        <Skills />
        <About />
        <Blog />
      </Layout>
    </Fragment>
  );
}
