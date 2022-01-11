import { QueryClient, QueryClientProvider } from "react-query";
import AppDetailsProvider from "../context/AppDetails";
import { useRedirectLogin } from "../hooks/useRedirectLogin";
import "../styles/globals.css";

const Wrapper = ({ children }) => {
  const { pageLoading } = useRedirectLogin();
  return pageLoading ? <></> : <>{children}</>;
};

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AppDetailsProvider>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </AppDetailsProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
