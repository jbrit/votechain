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
    "0xfFD1a7105Fae1774971654EE8DcccC30Bb4846Cf",
    Voting.abi,
    signer
  );
  const address = await signer.getAddress();

  return { address, contract };
};

export default useVoting;
