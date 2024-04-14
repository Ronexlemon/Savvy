import { FC, ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";
import FooterLayout from "../applayout/bottomFooter";
import WalletFooterLayout from "./bottomFooter";

interface Props {
  children: ReactNode;
}
const WalletLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="bg-gray-100 overflow-hidden flex flex-col h-screen">
        {/* <Header /> */}
        <div className="  w-full  ">
          {children}
        </div>
        <WalletFooterLayout />
      </div>
    </>
  );
};

export default WalletLayout;
