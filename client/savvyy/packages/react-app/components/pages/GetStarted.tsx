import React from "react";
import { Container, Image, Text, Button, Stack } from "@chakra-ui/react";
import {MdCall,MdSend} from "react-icons/md"
import Link from "next/link";


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
    <Link className="w-3/4" href='signup'><Button colorScheme="green" w='70%' rightIcon={<MdSend/>}>Signup</Button></Link>
    
    <Stack direction='row'>
    <Text color='black'>Already Have account?</Text>
    <Link href='login'><Button  colorScheme="green" variant='link'>Login</Button></Link>
    
    </Stack>
    
  </Container>
  
   
  );
}
