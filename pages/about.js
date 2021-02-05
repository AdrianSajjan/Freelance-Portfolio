import Layout from "layout";
import Head from "next/head";
import { Details, Hero } from "components/About";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Adrian Sajjan - Full Stack Developer and Freelancer</title>
      </Head>
      <Layout>
        <Hero />
        <Details />
      </Layout>
    </>
  );
}
