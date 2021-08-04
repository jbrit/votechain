import { useState } from "react";
import Button from "../components/Button";
import logo from "../public/logo.png";
import Image from "next/image";
import { CheckCircle } from 'react-feather';
import Web3Modal from "web3modal";
import Link from "next/link";
import Head from "next/head";



function Login() {
    const [pressed, setPressed] = useState(false)
    const handleClick = async() => {
        // const providerOptions = {
        //     // See Provider Options Section 
        // };
            
        const web3Modal = new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: true, // optional
        // providerOptions // required
        });

        const connection = await web3Modal.connect();
        
        // const provider = new ethers.providers.Web3Provider(connection)
        // const signer = provider.getSigner()
        // const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
    }
    
    return (
        <>
        <Head>
            <title>Voting DAPP | Login</title>
        </Head>
        <div className="grid xl:grid-cols-2 gap-40 pt-24 px-32">
            <div className="pb-10 xl:px-10 mx-auto  pt-56">
                <h1 className="text-4xl text-primary">Voting DAPP</h1>A platform that
                gives you access to <br /> a secure polling system. Developed <br /> using blockchain
                technology.
            </div>
            <div className="bg-white p-10 py-32 text-center">
                {!pressed ?
                (
                    <div className="card">
                    <Image src={logo} width={150} height={150}/>
                    <h1 className="text-primary text-4xl"><b>Votechain</b></h1>
                    <Button className="my-10" onClick={handleClick}>
                        Connect to Metamask Wallet
                    </Button>
                    <p className="uppercase">Login securely <Link href="#"><a className="text-primary">Here</a></Link></p>
                </div>
                ):(
                    <div className="card flex flex-col justify-center items-center">
                        <h1 className="text-primary text-4xl">
                            Successful
                        </h1>
                        <CheckCircle width={80} height={80} className="text-primary my-5" strokeWidth={1} />
                        <br />
                        <Button disabled>
                            Connecting Securely...
                        </Button>
                    </div>
                )}
            </div>
        </div>
        </>
    );
}

export default Login;
// #f9fafc

