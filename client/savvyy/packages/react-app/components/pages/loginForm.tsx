import React, { ChangeEvent, useState } from "react";
import { Container, Image, Text, Button, Stack,FormControl,Box,Flex, Heading, Input, FormLabel, Switch, useColorMode, useColorModeValue, HStack } from "@chakra-ui/react";
import {MdCall,MdSend} from "react-icons/md"
import Link from "next/link";
import {  SignInUserr } from "@/config/APIConfig";
import NextAuth from "next-auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function LoginForm() {
  const {data:session} = useSession();
  const router = useRouter();
  

  const [phoneNumber, setPhoneNumber] = useState(""); // State for phone number input
  const [password, setPassword] = useState(""); // State for password input

  const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async() => {
    // Handle form submission here, e.g., call an API to authenticate the user
    console.log("Phone number:", phoneNumber);
    console.log("Password:", password);
    // Reset input fields after submission if needed
    try{
      const res = await SignInUserr({phoneNumber:phoneNumber,password:password})
      // Check if response status is 200
      if (res?.status === 200) {
        // Navigate to homepage
        router.push("/homepage");
      }


    }catch(error){
      console.log("error",error)
    }
    setPhoneNumber("");
    setPassword("");
  };

  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading mb={6}>Log In</Heading>
        <Input
          placeholder="+254701707772"
          type="tel" // Use "tel" type for phone number input
          variant="filled"
          mb={3}
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          required
        />
        <Input
          placeholder="**********"
          type="password"
          variant="filled"
          mb={6}
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <Button colorScheme="teal" mb={8} onClick={handleSubmit}> {/* Call handleSubmit on button click */}
          Log In
        </Button>
        
        <FormControl display="flex" alignItems="center">
          {/* <FormLabel htmlFor="dark_mode" mb="0">
            Enable Dark Mode?
          </FormLabel>
          <Switch
            id="dark_mode"
            colorScheme="teal"
            size="lg"
            onChange={toggleColorMode}
          /> */}
          <HStack>
            <Text>have an account?</Text>
            <Link href='signup'><Button>Signup</Button></Link>
          </HStack>
        </FormControl>
      </Flex>
    </Flex>
  );
}


