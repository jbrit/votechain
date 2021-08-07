import { ethers } from "ethers";
import Web3Modal from "web3modal";
import Voting from "../artifacts/contracts/Voting.sol/Voting.json";

const useVoting = async () => {
  const web3Modal = new Web3Modal({
    network: "mumbai",
  });

  const connection = await web3Modal.connect();

  const provider = new ethers.providers.Web3Provider(connection);

  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    "0xf4BD2F605E7E8e5AfA43C4719E8A1a70f0b6787B",
    Voting.abi,
    signer
  );
  const address = await signer.getAddress();

  return { address, contract };
};

export default useVoting;
