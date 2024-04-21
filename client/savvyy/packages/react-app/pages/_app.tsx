import {
    RainbowKitProvider,
    connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import { injectedWallet } from "@rainbow-me/rainbowkit/wallets";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import { http, WagmiProvider, createConfig } from "wagmi";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { celo, celoAlfajores } from "wagmi/chains";
import { ChakraProvider } from '@chakra-ui/react'
import AuthProvider from "../utils/SessionProvider";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { getServerSession } from "next-auth";
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
  }

const connectors = connectorsForWallets(
    [
        {
            groupName: "Recommended",
            wallets: [injectedWallet],
        },
    ],
    {
        appName: "Celo Composer",
        projectId: "044601f65212332475a09bc14ceb3c34",
    }
);

const config = createConfig({
    connectors,
    chains: [celo, celoAlfajores],
    transports: {
        [celo.id]: http(),
        [celoAlfajores.id]: http(),
    },
});

const queryClient = new QueryClient();
type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
  }
  

const App=({ Component, pageProps }: AppPropsWithLayout)=> {
    //const session =  getServerSession();
    const getLayout = Component.getLayout ?? ((page) => page)
    const component = getLayout(<Component {...pageProps} />)
    
    return (
        
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>

                <ChakraProvider >
                <AuthProvider >

                    
                        {component}
                        </AuthProvider>
                    </ChakraProvider>
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
       
    );
}

export default App;
