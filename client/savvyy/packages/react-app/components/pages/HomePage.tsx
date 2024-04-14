import { Flex, Box, HStack, VStack,Text, Button } from "@chakra-ui/react";
import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdArrowUpward,MdArrowDownward } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdLocalGroceryStore } from "react-icons/md";
export default function Home() {
  return (
    <div className="flex h-full w-screen bg-gray-100 relative">
      <Flex h="100vh" direction="column" maxH="90vh" w="100%">
      <Flex h="70vh" direction="column" maxH="50vh" w="100%" position='relative'>
        <Box w="100%" bgGradient="linear(to-t, green.500, #2F7E79)" height="60%" roundedBottom="20px" >
        <Flex direction='row' w='100%' height='50%'alignItems='center'  padding={8} justifyContent='space-between'>
                <VStack spacing='5px'>
                    <Text >Welcome</Text>
                    <Text>Ronex Lemon</Text>

                </VStack>
                <VStack spacing='5px'>
                <IoIosNotificationsOutline/>

                </VStack>
                

            </Flex>

        </Box>
        <Box
          w="90%"
          bg="#2F7E79"
          height="50%"
          rounded="20px"
          position='absolute'
          top='35%'
          className="absolute top-3/4 left-1/2 transform -translate-x-1/2"
        >
            <Flex direction='row' w='100%' height='50%'alignItems='center' alignContent='center' padding={8} justifyContent='space-between'>
                <VStack>
                    <Text>Total Balance</Text>
                    <Text>$ 2,548.00</Text>

                </VStack>
                <HiDotsHorizontal />

            </Flex>
            <Flex direction='row' w='100%' height='50%'alignItems='center'  padding={8} justifyContent='space-between'>
                <VStack spacing='5px'>
                    <Button leftIcon={<MdArrowDownward color="white"/>} >Income</Button>
                    <Text>$ 2,548.00</Text>

                </VStack>
                <VStack spacing='5px'>
                <Button leftIcon={<MdArrowUpward color="red"/>} >Expenses</Button>
                    <Text>$ 2,548.00</Text>

                </VStack>
                

            </Flex>
        </Box>
        </Flex>
<Flex w='100%' direction='row' padding={1} justifyContent='space-between' alignItems='center'  >
    <Text color='black'>Transaction History</Text>
    <Button   ><Text color='gray.400'>See all</Text></Button>
</Flex>
<div className="w-full h-1/4">
<Flex w='100%' direction='row' padding={1} maxH='70vh' height='50vh'>
    
<Box w="100%"   height="60%" roundedBottom="20px" gap='5%'  >
        <Flex direction='row' w='100%' height='10%'alignItems='center'   padding={4} justifyContent='space-between'  mb="10px">
                <HStack>
                    <Button leftIcon={<MdLocalGroceryStore color="red"/>}/>
                    <Text>Utility</Text>
                </HStack>             
                
                <Text color='red.500'>-$ 2,548.00</Text>
            </Flex>
            <Flex direction='row' w='100%' height='10%'alignItems='center'  padding={4} justifyContent='space-between'  mb="10px">
                <HStack>
                    <Button leftIcon={<MdLocalGroceryStore color="red"/>}/>
                    <Text>Utility</Text>
                </HStack>             
                
                <Text color='red.500'>-$ 2,548.00</Text>
            </Flex>
            <Flex direction='row' w='100%' height='10%'alignItems='center'  padding={4} justifyContent='space-between' mb="10px">
                <HStack>
                    <Button leftIcon={<MdLocalGroceryStore color="red"/>}/>
                    <Text>Utility</Text>
                </HStack>             
                
                <Text color='red.500'>-$ 2,548.00</Text>
            </Flex>
            <Flex direction='row' w='100%' height='10%'alignItems='center'  padding={4} justifyContent='space-between'>
                <HStack>
                    <Button leftIcon={<MdLocalGroceryStore color="red"/>}/>
                    <Text>Utility</Text>
                </HStack>             
                
                <Text color='red.500'>-$ 2,548.00</Text>
            </Flex>
            

        </Box>

</Flex>

</div>



      </Flex>
    </div>
  );
}
