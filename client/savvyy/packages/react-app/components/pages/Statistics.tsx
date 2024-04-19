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
export default function StatisticPage() {
  return (
    <div className="flex h-full w-screen bg-gray-100 relative">
      <Flex h="100vh" direction="column" maxH="90vh" w="100%">
      
        <Box w="100%" bgGradient="linear(to-t, green.500, #2F7E79)" height="20%" roundedBottom="20px" >
        <Flex direction='row' w='100%' height='50%'alignItems='center'  padding={8} justifyContent='space-between'>
                
        <Button leftIcon={<FaMoneyCheckAlt color="yellow"/>}/>
                    <Text>Cashout</Text>

                
                <VStack spacing='5px'>
                <IoIosNotificationsOutline/>

                </VStack>
                

            </Flex>

        </Box>


<div className="h-3/4 w-full flex flex-col justify-center items-center">


  
       
<div className="w-3/4 mr-5  h-16 rounded-2xl bg-gray-300 flex justify-center items-center text-black mt-10 mb-10 ">
        <Flex w="100%" justifyContent='space-around' alignItems='center'>
            <Button rounded={15} backgroundColor='white'><Text color='black'>Cards</Text></Button>
            <Button><Text rounded={5} color='black'>Accounts</Text></Button>

        </Flex>


    </div>
    <div className="w-3/4 mr-5  h-1/4 rounded-2xl bg-[#438883] bg-opacity-10 flex justify-center items-center text-black mt-10 mb-10 ">
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
    <div className="w-3/4 mr-5  h-24 rounded-2xl bg-gray-300 flex justify-center items-center text-black mt-10 mb-10 ">
    <Flex w="100%" justifyContent='space-around' alignItems='center' paddingRight={2}>
            <div className=" rounded-full h-10 w-10 flex justify-center items-center"><SiCashapp  color="#888888" className="w-10 h-10"/></div>
            <div className=" flex flex-col justify-center items-start ">
                <Text fontSize='sm'>Withdraw to EOA</Text>
                <Text fontSize='sm'>internet transfer </Text>
                
            </div>
            
          

        </Flex>


    </div>
    <div className="w-3/4 mr-5  h-16 rounded-2xl   border-green-400 border-2 flex justify-center items-center text-black mt-10 mb-10 ">
        <Flex w="100%" justifyContent='space-around' alignItems='center'>
            <Button color='green'>Next</Button>
            
        </Flex>


    </div>
    </div>

   





      </Flex>
    </div>
  );
}
