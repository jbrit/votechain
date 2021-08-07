import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRedirectLogin } from "../hooks/useRedirectLogin";
import routeNames from "../routes";
import "../styles/globals.css";

const Wrapper = ({ children }) => {
  const { pageLoading } = useRedirectLogin();
  return pageLoading ? <></> : <>{children}</>;
};

function MyApp({ Component, pageProps }) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}

export default MyApp;
