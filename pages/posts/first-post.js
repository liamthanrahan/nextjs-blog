import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <p>
        This page has a static route that is loaded manually. All other pages
        are loaded dynamically on build.
      </p>
    </Layout>
  );
}
