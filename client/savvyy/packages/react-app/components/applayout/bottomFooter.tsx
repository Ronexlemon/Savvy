import React from "react";
import { Button, Flex, HStack } from "@chakra-ui/react";
import { CiHome } from "react-icons/ci";
import { GiNetworkBars } from "react-icons/gi";
import { FaWallet, FaUser } from "react-icons/fa6";
import Link from "next/link";

const FooterLayout = () => {
  return (
    <footer className="bg-gray-50 mt-auto border-gray-300 border-t relative">
      <Flex h="10vh" justifyContent="center" alignItems="center">
        <Flex w="80vh" alignItems="center">
          <HStack spacing={1} flex="1" justify="space-around">
          <Link href='/homepage'><Button flex="1" leftIcon={<CiHome color="black" />} /></Link>
          <Link href='/stats'> <Button flex="1" leftIcon={<GiNetworkBars color="black" />} /></Link>
          <Link href='/wallet'> <Button flex="1" leftIcon={<FaWallet color="black" />} /></Link>
          <Link href='/manage'> <Button flex="1" leftIcon={<FaUser color="black" />} /></Link>
            
           
           
           
          </HStack>
        </Flex>
        {/* Circular button */}
        <div className="absolute bottom-0 left-1/2 mb-10 transform -translate-x-1/2 -translate-y-1/2">
        <Button
  size="lg"
  borderRadius="full"
  bg="teal.500"
  color="white"
  boxShadow="lg"
  aria-label="Floating Action Button"
  _focus={{
    boxShadow: "outline",
  }}
  _hover={{
    bg: "teal.600",
  }}
  _active={{
    bg: "teal.500",
    transform: "none",
  }}
>
  +
</Button>
        </div>
      </Flex>
    </footer>
  );
};

export default FooterLayout;
