import React from "react";
import { Button, Container, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function LandingPage() {
  return (
    
    <Container centerContent={true} maxH="100vh" position="static">
      <Image src="/img/savvylogo.svg" />
      <Link className="pt-14" href='/start'><Button backgroundColor='orange'> <Text>Get Started</Text></Button></Link>
      <Text
        color="white"
        fontSize="50px"
        position="absolute"
        bottom="0"
        textAlign="center"
        width="100%"
        marginBottom="30px"
      >
        Savvy
      </Text>
    </Container>
    
  );
}
