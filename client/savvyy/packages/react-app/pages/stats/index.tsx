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
import CashOutPage from "@/components/pages/Cashout";
import StatisticPage from "@/components/pages/Statistics";

const Cashout:NextPageWithLayout =()=> {
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
        <StatisticPage/>
        </>
    );
}

export default Cashout;



  
  Cashout.getLayout = function getLayout(page:ReactElement) {
    return (
      <WalletLayout>{page}</WalletLayout>
    )
  }
  
  
  