import { ReactElement, useEffect, useState } from "react";
import { useAccount } from "wagmi";

import LayoutStart from "@/components/LayoutStart";
import type { NextPageWithLayout } from "../_app";
import LandingPage from "@/components/pages/landing";
import Layout from "@/components/Layout";
import GetStartedPage from "@/components/pages/GetStarted";

const Home:NextPageWithLayout =()=> {
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
        <div className="flex flex-col justify-center items-center">
            <GetStartedPage/>
        </div>
    );
}

export default Home;



  
  Home.getLayout = function getLayout(page:ReactElement) {
    return (
      <LayoutStart>{page}</LayoutStart>
    )
  }
  
  
  