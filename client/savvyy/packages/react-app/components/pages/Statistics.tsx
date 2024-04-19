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
export default function StatisticPage() {
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


  
       
<div className="w-full   h-16   flex justify-center items-center text-black   ">
        <HStack w="100%" justifyContent='space-around' alignItems='center'>
            <Button rounded={10} backgroundColor='#438883' ><Text color='black'>Cards</Text></Button>
            <Button rounded={15} ><Text color='black'>Cards</Text></Button>
            <Button rounded={15} ><Text color='black'>Cards</Text></Button>
            <Button rounded={15} ><Text color='black'>Cards</Text></Button>
            
        </HStack>


    </div>
    <div className="w-full   h-3/4  bg-[#438883] bg-opacity-10 flex justify-center items-center text-black mt-10 mb-10 ">
        <Flex w="100%" justifyContent='space-around' alignItems='center'>
            <div className="bg-[#FFFFFF] rounded-full h-20 w-20 flex justify-center items-center"><RiBankFill color="green" className="w-20 h-10"/></div>
            <div className=" flex flex-col justify-center items-start ">
                <Text fontSize='sm'>Onramp</Text>
                <Text fontSize='sm'>Connect your bank </Text>
                <Text fontSize='sm'>account to deposit & fund </Text>
            </div>
            
            <FaCircleCheck color="green"  className="w-8 h-8"/>
           

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
                
                <Text color='red.500'>-$ 2,548.00</Text>
            </Flex>
            <Flex direction='row' w='100%' height='20%' alignItems='start'    justifyContent='space-between'  mb="10px">
                <HStack>
                    <Button leftIcon={<MdLocalGroceryStore color="red"/>}/>
                    <Text color='black'>Transfer</Text>
                </HStack>             
                
                <Text color='red.500'>-$ 2,548.00</Text>
            </Flex>
            <Flex direction='row' w='100%' height='20%'alignItems='start'    justifyContent='space-between'  mb="10px">
                <HStack>
                    <Button leftIcon={<MdLocalGroceryStore color="red"/>}/>
                    <Text color='black'>Friends</Text>
                </HStack>             
                
                <Text color='red.500'>-$ 2,548.00</Text>
            </Flex>
          

        </VStack>


    </div>
    
    </div>

   





      </Flex>
    </div>
  );
}
