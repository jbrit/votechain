import Link from "next/link";
import Head from "next/head";
import { AlertTriangle } from "react-feather";
import Button from "../components/Button";
import { useRouter } from "next/router";
import routeNames from "../routes";

function Custom404() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Voting DAPP | Oops!</title>
      </Head>
      <div className="p-52 pt-32 flex justify-center text-center">
        <div className="card bg-white p-10 lg:p-20 rounded-md flex flex-col items-center">
          <h1 className="text-4xl text-primary">
            Opps! <br /> Page not found
          </h1>
          <AlertTriangle
            className="text-red-600 my-10"
            width={100}
            height={100}
            strokeWidth={1}
          />
          <p className="px-0 xl:px-20 mb-10">
            The page you are trying to access is not available or has been moved
            temporaily. If you’re sure this is the place you’re trying to go,
            please contact us{" "}
            <Link href="#">
              <a className="text-primary">here</a>
            </Link>
          </p>
          <div className="flex flex-col lg:flex-row">
            <Button outline className="m-2" onClick={router.back}>
              Back
            </Button>
            <Button
              className="m-2"
              onClick={() => router.push(routeNames.dashboard)}
            >
              Dashboard
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Custom404;
