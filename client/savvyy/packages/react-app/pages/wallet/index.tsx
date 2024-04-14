import { ReactElement, useEffect, useState } from "react";
import { useAccount } from "wagmi";

import LayoutStart from "@/components/LayoutStart";
import type { NextPageWithLayout } from "../_app";
import LandingPage from "@/components/pages/landing";
import Layout from "@/components/Layout";
import WalletLayout from "@/components/walletLayout/walletLayout";
import GetStartedPage from "@/components/pages/GetStarted";
import Home from "@/components/pages/HomePage";
import WalletPage from "@/components/pages/Wallet";

const Wallet:NextPageWithLayout =()=> {
    const [userAddress, setUserAddress] = useState("");
    const [isMounted, setIsMounted] = useState(false);
    const { address, isConnected } = useAccount();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isConnected && address) {
            setUserAddress(address);
        }
    }, [address, isConnected]);

    if (!isMounted) {
        return null;
    }

    return (
        <>
        <WalletPage/>
        </>
    );
}

export default Wallet;



  
  Wallet.getLayout = function getLayout(page:ReactElement) {
    return (
      <WalletLayout>{page}</WalletLayout>
    )
  }
  
  
  