import { useState } from "react";
import Button from "../components/Button";
import logo from "../public/logo.png";
import Image from "next/image";
import { CheckCircle } from "react-feather";
import Link from "next/link";
import Head from "next/head";
import useVoting from "../hooks/useVoting";
import { ethers } from "ethers";
import router from "next/router";
import routeNames from "../routes";

function Login() {
  const [pressed, setPressed] = useState(false);
  const [loading, setLoading] = useState(false);
  router;
  const handleClick = async () => {
    setLoading(true);
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log(signer);
      await useVoting();
    } catch (error) {
      setLoading(false);
      return;
    }
    setPressed(true);
    setTimeout(() => router.push(routeNames.dashboard), 1000);
  };

  return (
    <>
      <Head>
        <title>Voting DAPP | Login</title>
      </Head>
      <div className="grid xl:grid-cols-2 gap-40 pt-24 px-32">
        <div className="pb-10 xl:px-10 mx-auto  pt-56">
          <h1 className="text-4xl text-primary">Voting DAPP</h1>A platform that
          gives you access to <br /> a secure polling system. Developed <br />{" "}
          using blockchain technology.
        </div>
        <div className="bg-white p-10 py-32 text-center">
          {!pressed ? (
            <div className="card">
              <Image src={logo} width={150} height={150} />
              <h1 className="text-primary text-4xl">
                <b>Votechain</b>
              </h1>
              <Button className="my-10" onClick={handleClick}>
                {loading
                  ? "Connecting Securely..."
                  : "Connect to Metamask Wallet"}
              </Button>
              <p className="uppercase">
                Login securely{" "}
                <Link href="#">
                  <a className="text-primary">Here</a>
                </Link>
              </p>
            </div>
          ) : (
            <div className="card flex flex-col justify-center items-center">
              <h1 className="text-primary text-4xl">Successful</h1>
              <CheckCircle
                width={80}
                height={80}
                className="text-primary my-5"
                strokeWidth={1}
              />
              <br />
              <Button disabled>Connected</Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Login;
// #f9fafc
