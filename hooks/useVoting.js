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
    "0x85bD1fAaf97566ffa78481A050321B6d9B10e984",
    Voting.abi,
    signer
  );
  const address = await signer.getAddress();

  return { address, contract };
};

export default useVoting;
