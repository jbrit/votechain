import { ethers } from "ethers";
import Web3Modal from "web3modal";
import Voting from "../artifacts/contracts/Voting.sol/Voting.json";

const useVoting = async ({ getRequest = true }) => {
  if (getRequest) {
    const provider = new ethers.providers.JsonRpcProvider({
      url: "https://rpc-mumbai.maticvigil.com/",
    });
    const contract = new ethers.Contract(
      "0xfFD1a7105Fae1774971654EE8DcccC30Bb4846Cf",
      Voting.abi,
      provider
    );
    return { contract };
  } else {
    /* needs the user to sign the transaction, so will use Web3Provider and sign it */
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const chainId = await provider.getNetwork();
    const address = await signer.getAddress();
    const contract = new ethers.Contract(
      "0xfFD1a7105Fae1774971654EE8DcccC30Bb4846Cf",
      Voting.abi,
      signer
    );
    return { address, contract };
  }
};

export default useVoting;
