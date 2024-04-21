import React, { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  Text,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { UserSignUp } from "@/config/APIConfig";

export default function SignUpForm() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const formBackground = useColorModeValue('gray.100', 'gray.700');

  const handleSubmit = async() => {
    // Do something with the form data
    console.log("Phone Number:", phoneNumber);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    try{
      const res = await UserSignUp({phoneNumber:phoneNumber,password:password});
      if (res?.status === 200) {
        // Navigate to homepage
        router.push("/login");
      }


    }catch(error){

    }

    // Reset the form fields
    setPhoneNumber("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        p={12}
        bg={formBackground}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading mb={6}>SignUp</Heading>
        <FormControl mb={3}>
          <Input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="+254701707772"
            type="number"
            variant="filled"
            required={true}
          />
        </FormControl>
        <FormControl mb={3}>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="**********"
            type="password"
            variant="filled"
            required={true}
          />
        </FormControl>
        <FormControl mb={6}>
          <Input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            type="password"
            variant="filled"
            required={true}
          />
        </FormControl>
        <Button onClick={handleSubmit} colorScheme="teal" mb={8}>
          Sign up
        </Button>
        <FormControl display="flex" alignItems="center">
          <HStack>
            <Text>Have an account</Text>
            <Link href="login">
              <Button>Login</Button>
            </Link>
          </HStack>
        </FormControl>
      </Flex>
    </Flex>
  );
}
