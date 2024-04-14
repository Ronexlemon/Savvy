import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
    children: ReactNode;
}
const LayoutStart: FC<Props> = ({ children }) => {
    return (
        <>
            <div className=" bg-[#EEF8F7]  overflow-hidden flex flex-col  min-h-screen    ">
                {/* <Header /> */}
                <div className="py-16 max-w-7xl mx-auto space-y-8 sm:px-6 lg:px-8 h-full">
                    {children}
                </div>
                {/* <Footer /> */}
            </div>
        </>
    );
};

export default LayoutStart;
