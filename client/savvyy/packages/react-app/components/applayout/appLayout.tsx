import { FC, ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";
import  FooterLayout from "../applayout/bottomFooter" ;

interface Props {
    children: ReactNode;
}
const AppLayout: FC<Props> = ({ children }) => {
    return (
        <>
            <div className=" bg-gray-100  overflow-hidden flex flex-col min-h-screen  ">
                {/* <Header /> */}
                <div className="py-16 max-w-7xl mx-auto space-y-8 sm:px-6 lg:px-8 h-full">
                    {children}
                </div>
               <FooterLayout/>
            </div>
        </>
    );
};

export default AppLayout;
