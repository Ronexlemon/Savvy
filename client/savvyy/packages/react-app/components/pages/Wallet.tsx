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
import Link from "next/link";
export default function WalletPage() {
  return (
    <div className="flex h-full w-screen bg-gray-100 relative">
      <Flex h="100vh" direction="column" maxH="90vh" w="100%">
      
        <Box w="100%" bgGradient="linear(to-t, green.500, #2F7E79)" height="20%" roundedBottom="20px" >
        <Flex direction='row' w='100%' height='50%'alignItems='center'  padding={8} justifyContent='space-between'>
                
        <Button leftIcon={<FaMoneyCheckAlt color="yellow"/>}/>
                    <Text>Wallet</Text>

                
                <VStack spacing='5px'>
                <IoIosNotificationsOutline/>
                <Link href='/'>Logout</Link>

                </VStack>
                

            </Flex>

        </Box>
       
{/* <Flex w='100%' direction='row' padding={1} justifyContent='space-between' alignItems='center'  >
    <Text color='black'>Transaction History</Text>
    <Button   ><Text color='gray.400'>See all</Text></Button>
</Flex> */}
<div className="w-full h-full ">
<Flex w='100%' direction='column' padding={1} maxH='100vh' height='100%' >
    <Flex w='100%' direction='column' padding={1} justifyContent='center' alignItems='center' color='black'  >
        <Text color='black'>Total Balance</Text>
        <Text>$ 2,589</Text>
        <HStack w='100%' direction='row' alignItems='center' justifyContent='center' gap={10} paddingTop={4}>
        <div className="rounded-full  border-green-500 border-2 h-14 w-14 flex justify-center items-center">
    <Button leftIcon={<GoPlus color="green"  />} />
</div>

<div className="rounded-full border-2 border-green-500 h-14 w-14 flex justify-center items-center">
    <Button leftIcon={<IoQrCodeSharp  color="green"  />} />
</div>
<div className="rounded-full border-2 border-green-500 h-14 w-14 flex justify-center items-center">
    <Button leftIcon={<BsFillSendFill color="green"  />} />
</div>

        </HStack>
        <HStack w='100%' direction='row' alignItems='center' justifyContent='center' gap={16} paddingTop={4}>
            <Text>Add</Text>
            <Text>Pay</Text>
            <Text>Send</Text>

        </HStack>

    </Flex>

    <div className="w-full  h-20 rounded-2xl bg-gray-300 flex justify-center items-center text-black mt-10 mb-10 ">
        <Flex w="100%" justifyContent='space-around' alignItems='center'>
            <Button backgroundColor='white'><Text color='black'>Transactions</Text></Button>
            <Button><Text color='black'>Upcoming Bils</Text></Button>

        </Flex>


    </div>



    
<Box w="100%"   maxH="100vh" height="80%" roundedBottom="20px" gap='5%'  color='red'   alignContent='space-between' >
        <Flex direction='row' w='100%' height='10%'alignItems='center'   padding={4} justifyContent='space-between'  mb="10px">
                <HStack>
                    <Button leftIcon={<MdLocalGroceryStore color="red"/>}/>
                    <Text color='black'>Utility</Text>
                </HStack>             
                
                <Text color='red.500'>-$ 2,548.00</Text>
            </Flex>
            <Flex direction='row' w='100%' height='10%'alignItems='center'  padding={4} justifyContent='space-between'  mb="10px">
                <HStack>
                    <Button leftIcon={<RiFolderTransferFill color="red"/>}/>
                    <Text color='black'>Transfer</Text>
                </HStack>             
                
                <Text color='red.500'>-$ 2,548.00</Text>
            </Flex>
            <Flex direction='row' w='100%' height='10%'alignItems='center'  padding={4} justifyContent='space-between' mb="10px">
                <HStack>
                    <Button leftIcon={<RiFolderReceivedFill color="green"/>}/>
                    <Text color='black'>Received</Text>
                </HStack>             
                
                <Text color='green.500'>+$ 2,548.00</Text>
            </Flex>
            <Flex direction='row' w='100%' height='10%'alignItems='center'  padding={4} justifyContent='space-between'>
            <HStack height="100%">
                
                    <Button height='100%' leftIcon={<GiThreeFriends color="blue"/>}/>
                    <Text color='black'>Friend3</Text>
                </HStack>              
                
                <Text color='red.500'>-$ 48.00</Text>
            </Flex>
            

        </Box>

</Flex>

</div>



      </Flex>
    </div>
  );
}
