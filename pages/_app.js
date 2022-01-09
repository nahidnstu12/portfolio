import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp(props) {
  // console.log(props);
  const { Component, pageProps, router } = props;
  const withoutSidebar = router.pathname.includes("resume");
  return !withoutSidebar ? (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) : (
    <Component {...pageProps} />
  );
}

export default MyApp;
