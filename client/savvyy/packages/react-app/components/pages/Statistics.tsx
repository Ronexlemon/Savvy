import { Flex, Box, HStack, VStack,Text, Button } from "@chakra-ui/react";
import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdArrowUpward,MdArrowDownward } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdLocalGroceryStore } from "react-icons/md";
import { GiThreeFriends } from "react-icons/gi";
import { RiFolderReceivedFill,RiFolderTransferFill } from "react-icons/ri";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { IoQrCodeSharp } from "react-icons/io5";
import { BsFillSendFill } from "react-icons/bs";
import { RiBankFill } from "react-icons/ri";
import { FaCircleCheck } from "react-icons/fa6";
import { SiCashapp } from "react-icons/si";

import { FaDownload } from "react-icons/fa6";
import { BackendSavvyApi } from "@/constants/backendApi";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import LineChart from "../chart/lineChart";

export type dataTotal ={
    utility:number,
    transfers:number,
    friends:number,
   
}
export default function StatisticPage() {
    const {data:session} = useSession();
    const token = session?.user.accesstokens as unknown as string;
    const getTotalTransaction = async () => {
        const res = await fetch(`${BackendSavvyApi}/transaction/getTotalAmount`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          credentials: "omit",
        });
        if (!res.ok) {
          throw new Error("Failed to fetch properties");
        }
        return res.json();
      };
    
      const { data, error, isLoading } = useQuery<dataTotal>({
        queryKey: ["properties"],
        queryFn: getTotalTransaction,
        enabled: !!token,
      });
    
      console.log("data data", data);
  return (
    <div className="flex h-full w-screen bg-gray-100 relative">
      <Flex h="100vh" direction="column" maxH="90vh" w="100%">
      
        <Box w="100%"  height="20%" roundedBottom="20px" >
        <Flex direction='row' w='100%' height='50%'alignItems='center'  padding={8}  justifyContent='space-between'>
                
        <Button leftIcon={<FaMoneyCheckAlt color="yellow"/>}/>
                    <Text color='black'>Statistics</Text>

                
                <VStack spacing='5px'>
                <FaDownload color="black"/>

                </VStack>
                

            </Flex>

        </Box>


<div className="h-3/4 w-full  flex flex-col justify-center items-center">


  
       
<div className="w-full   h-16   flex justify-center items-center text-black  bg-[#438883]   ">
        <HStack  w="100%" justifyContent='space-around'spacing={8} direction='row' align='center' overflowX="auto" alignItems='center'>
            <Button variant='solid'  rounded={10}  ><Text color='black'>Jan</Text></Button>
            <Button rounded={15}  ><Text color='black'>Feb</Text></Button>
            <Button rounded={15}  ><Text color='black'>Apr</Text></Button>
            <Button rounded={15}  ><Text color='black'>May</Text></Button>
            <Button rounded={10}  ><Text color='black'>June</Text></Button>
            <Button rounded={15} ><Text color='black'>July</Text></Button>
            <Button rounded={15} ><Text color='black'>Aug</Text></Button>
            <Button rounded={15}><Text color='black'>Sep</Text></Button>
            <Button rounded={15}><Text color='black'>Oct</Text></Button>
            <Button rounded={15}><Text color='black'>Nov</Text></Button>
            <Button rounded={15}><Text color='black'>Dec</Text></Button>
            
        </HStack>


    </div>
    <div className="w-full   h-1/2  bg-[#438883] bg-opacity-10 flex justify-center items-center text-black mt-10 mb-10 ">
       
    <Flex
        w="100%"
        maxW="60%" 
        h="90%"
        justifyContent="center"
        alignItems="center"
      >
        <LineChart />
      </Flex>


    </div>
    <div className="w-full flex  justify-start items-start pl-10">
        <Text color='black'>Top Spending</Text>

    </div>
    <div className="w-full p-4  h-full rounded-2xl  flex  text-black   ">
    <VStack w="100%" h='100%'  justifyContent='space-around' alignItems='start' padding={1}>
            
    <Flex direction='row' w='100%' height='20%'alignItems='start'   alignContent='center'  justifyContent='space-between'  mb="10px">
                <HStack>
                    <div className="flex justify-center items-center rounded-full h-10 w-10">
                    <Button leftIcon={<MdLocalGroceryStore color="red"/>}/>
                    </div>
                    
                    <Text color='black'>Utility</Text>
                </HStack>             
                
                <Text color='red.500'>-$  {data?.utility}</Text>
            </Flex>
            <Flex direction='row' w='100%' height='20%' alignItems='start'    justifyContent='space-between'  mb="10px">
                <HStack>
                    <Button leftIcon={<MdLocalGroceryStore color="red"/>}/>
                    <Text color='black'>Transfer</Text>
                </HStack>             
                
                <Text color='red.500'>-$ {data?.transfers}</Text>
            </Flex>
            <Flex direction='row' w='100%' height='20%'alignItems='start'    justifyContent='space-between'  mb="10px">
                <HStack>
                    <Button leftIcon={<MdLocalGroceryStore color="red"/>}/>
                    <Text color='black'>Friends</Text>
                </HStack>             
                
                <Text color='red.500'>-$ {data?.friends}</Text>
            </Flex>
          

        </VStack>


    </div>
    
    </div>

   





      </Flex>
    </div>
  );
}
