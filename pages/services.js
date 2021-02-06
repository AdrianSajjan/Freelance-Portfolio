import Layout from "layout";
import Head from "next/head";
import { Details, Hero } from "components/Services";

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Adrian Sajjan - Full Stack Developer and Freelancer</title>
      </Head>
      <Layout>
        <Hero />
        <Details />
      </Layout>
    </>
  );
}
