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
    "0x750f58AE83885b2f6Fe2Fb709d7A1aD37107Fc27",
    Voting.abi,
    signer
  );
  return { contract };
};

export default useVoting;
