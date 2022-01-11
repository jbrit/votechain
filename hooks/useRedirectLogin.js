import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { appDetailsContext } from "../context/AppDetails";
import routeNames from "../routes";

export const useRedirectLogin = () => {
  const [pageLoading, setPageLoading] = useState(true);
  const router = useRouter();
  const [appDetails] = useContext(appDetailsContext);

  useEffect(() => {
    const isAuthRoute = router.pathname === routeNames.login;
    const user = localStorage.getItem("dappUser");
    const connectedWallet =
      typeof window.ethereum !== "undefined" &&
      !(window.ethereum.selectedAddress === null);
    if (!isAuthRoute && appDetails["address"] === "") {
      router.replace(routeNames.login);
    } else {
      setPageLoading(false);
    }
  }, [router, appDetails]);

  return { pageLoading };
};
