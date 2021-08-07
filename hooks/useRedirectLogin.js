import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import routeNames from "../routes";

export const useRedirectLogin = () => {
  const [pageLoading, setPageLoading] = useState(true);
  const router = useRouter();
  const isAuthRoute = router.pathname === routeNames.login;

  useEffect(() => {
    const connectedWallet = !window.ethereum.selectedAddress === null;
    if (!isAuthRoute && !connectedWallet) {
      router.push(routeNames.login);
      setPageLoading(false);
    } else {
      setPageLoading(false);
    }
  }, []);
  return { pageLoading };
};
