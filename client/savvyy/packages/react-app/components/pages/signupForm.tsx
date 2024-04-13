import React from "react";
import { Container, Image, Text, Button, Stack,FormControl,Box,Flex, Heading, Input, FormLabel, Switch, useColorMode, useColorModeValue, HStack } from "@chakra-ui/react";
import {MdCall,MdSend} from "react-icons/md"


export default function SignUpForm() {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700')
  return (
   
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading mb={6}>SignUp</Heading>
        <Input
          placeholder="+254701707772"
          type="number"
          variant="filled"
          mb={3}
          required= {true}

        />
        <Input
          placeholder="**********"
          type="password"
          variant="filled"
          mb={3}
        />
        <Input
          placeholder="confirm Password"
          type="password"
          variant="filled"
          mb={6}
        />
        <Button colorScheme="teal" mb={8}>
          Sign up
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
            <Text>Have an account</Text>
            <Button >Login</Button>
          </HStack>
         
          
        </FormControl>
      </Flex>
    </Flex>
  
   
  );
}
