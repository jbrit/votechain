import { useRedirectLogin } from "../hooks/useRedirectLogin";
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
