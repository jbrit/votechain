import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import routeNames from "../routes";

export const useRedirectLogin = () => {
  const [pageLoading, setPageLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const isAuthRoute = router.pathname === routeNames.login;
    const connectedWallet = !(window.ethereum.selectedAddress === null);
    if (!isAuthRoute && !connectedWallet) {
      router.replace(routeNames.login);
    } else {
      setPageLoading(false);
    }
  }, [router.pathname]);
  return { pageLoading };
};
