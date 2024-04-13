import React from "react";
import { Container, Image, Text, Button, Stack } from "@chakra-ui/react";
import {MdCall,MdSend} from "react-icons/md"


export default function GetStartedPage() {
  return (
   
    <Container bg='#EEF8F7' centerContent={true}   minHeight='100vh'  >
      <Container   bg='#EEF8F7' >
      <Image  src="/img/startimage.png"  objectFit='cover' width='100%' height="20%" marginTop='5%' />
      </Container>
   
    <Text
      color="#438883"
      fontSize="50px"
      fontWeight='bold'     
     
      textAlign="center"
      width="100%"
      marginBottom="30px"
    >
      Spend smarter
      Save More
    </Text>
    <Button colorScheme="green" width="60%" rightIcon={<MdSend/>}>Get Started</Button>
    <Stack direction='row'>
    <Text>Already Have account?</Text>
    <Button colorScheme="green" variant='link'>Login</Button>
    </Stack>
    
  </Container>
  
   
  );
}
