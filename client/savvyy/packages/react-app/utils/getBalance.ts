import { ethers} from "ethers";
const CUSD_ADDRESS = "0x874069fa1eb16d44d622f2e0ca25eea172369bc1" //"0x765de816845861e75a25fca122bb6898b8b1282a";///cusd contract address

export const getCUSDBalance = async (address: string) => {
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const abi = [
            "function transfer(address to, uint256 value)",
            "function balanceOf(address account) view returns (uint256)"
        ];
        const CUSDContract = new ethers.Contract(CUSD_ADDRESS, abi, provider);

        // Use await to wait for the balanceOf function call to resolve
        const balance = await CUSDContract.balanceOf(address)/10**18;
        console.log("balance balance",balance)

        // Return the balance
        return balance;
    }
};
