import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import routeNames from "../routes";

export const useRedirectLogin = () => {
  const [pageLoading, setPageLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const isAuthRoute = router.pathname === routeNames.login;
    const user = localStorage.getItem("dappUser")
    const connectedWallet =
      typeof window.ethereum !== "undefined" &&
      !(window.ethereum.selectedAddress === null);
    if (!isAuthRoute && !connectedWallet && user !== null) {
      router.replace(routeNames.login);
    } else {
      setPageLoading(false);
    }
  }, [router.pathname]);
  return { pageLoading };
};
