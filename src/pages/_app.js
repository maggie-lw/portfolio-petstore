import { Fragment } from "react";
import Layout from "../components/Layout/Layout";
import { wrapper } from "../store/index";
import "../../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;
