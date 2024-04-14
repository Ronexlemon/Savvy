import { Flex, Box, HStack, VStack,Text, Button } from "@chakra-ui/react";
import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdArrowUpward,MdArrowDownward } from "react-icons/md";
export default function Home() {
  return (
    <div className="flex h-full w-screen bg-red-300 relative">
      <Flex h="100vh" direction="column" maxH="90vh" w="100%" position='relative'>
        <Box w="100%" bg="#429690" height="30%" roundedBottom="20px" />
        <Box
          w="90%"
          bg="red"
          height="25%"
          rounded="20px"
          position='absolute'
          top='20%'
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
                    <Button leftIcon={<MdArrowDownward/>} >Income</Button>
                    <Text>$ 2,548.00</Text>

                </VStack>
                <VStack spacing='5px'>
                <Button leftIcon={<MdArrowDownward/>} >Expenses</Button>
                    <Text>$ 2,548.00</Text>

                </VStack>
                

            </Flex>
        </Box>
      </Flex>
    </div>
  );
}
