import { ReactElement, useEffect, useState } from "react";
import { useAccount } from "wagmi";

import LayoutStart from "@/components/LayoutStart";
import type { NextPageWithLayout } from "@/pages/_app";
import LandingPage from "@/components/pages/landing";
import Layout from "@/components/Layout";
import GetStartedPage from "@/components/pages/GetStarted";
import SignUpForm from "@/components/pages/signupForm";
import LoginForm from "@/components/pages/loginForm";
import AppLayout from "@/components/applayout/appLayout";
const HomePage:NextPageWithLayout =()=> {
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
        <div className="flex flex-col ">
           <p className="text-black">hello</p>
        </div>
    );
}

export default HomePage;



  
HomePage.getLayout = function getLayout(page:ReactElement) {
    return (
      <AppLayout>{page}</AppLayout>
    )
  }
  
  
  