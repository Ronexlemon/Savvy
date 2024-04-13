import React from "react";
import { Container, Image, Text } from "@chakra-ui/react";

export default function LandingPage() {
  return (
    
    <Container centerContent={true} maxH="100vh" position="static">
      <Image src="/img/savvylogo.svg" />
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
