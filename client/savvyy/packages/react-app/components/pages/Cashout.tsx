import { Flex, Box, HStack, VStack,Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter, useDisclosure, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdArrowUpward,MdArrowDownward } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdLocalGroceryStore } from "react-icons/md";
import { GiThreeFriends } from "react-icons/gi";
import { RiFolderReceivedFill,RiFolderTransferFill } from "react-icons/ri";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { IoQrCodeSharp } from "react-icons/io5";
import { BsFillSendFill } from "react-icons/bs";
import { RiBankFill } from "react-icons/ri";
import { FaCircleCheck } from "react-icons/fa6";
import { SiCashapp } from "react-icons/si";
import { CreateTransaction } from "@/config/APIConfig";
import { useSession } from "next-auth/react";
import { tokenPocketWallet } from "@rainbow-me/rainbowkit/dist/wallets/walletConnectors";
export default function CashOutPage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {data:session} = useSession();
    const format = (val:any) => `$` + val
    const [value, setValue] = React.useState('0')
    const [eoa, setEoa] = useState("");
  const [reason, setReason] = useState("");
  const [amount, setAmount] = useState(0);
  function getCurrentMonthNumber(): number {
    const currentDate = new Date();
    return currentDate.getMonth() + 1;
}
const token = session?.user.accesstokens as unknown as string;
console.log("tokn ssss",token)
    const handleCashout =async () => {
        // Perform cashout logic here

        const currentMonthNumber = getCurrentMonthNumber();
        console.log("EOA:", eoa);
        console.log("Reason:", reason);
        console.log("Amount:", value);
        try{
            const result = await CreateTransaction({transanctiontype:reason,amount:value,month:currentMonthNumber,token:token})
            console.log(result?.status)
        
            // Close the modal after cashout
            onClose();

        }catch(error){
            console.log("transaction error",error);
        }
       
      };
  return (
    <div className="flex h-full w-screen bg-gray-100 relative">
      <Flex h="100vh" direction="column" maxH="90vh" w="100%">
      
        <Box w="100%" bgGradient="linear(to-t, green.500, #2F7E79)" height="20%" roundedBottom="20px" >
        <Flex direction='row' w='100%' height='50%'alignItems='center'  padding={8} justifyContent='space-between'>
                
        <Button leftIcon={<FaMoneyCheckAlt color="yellow"/>}/>
                    <Text>Cashout</Text>

                
                <VStack spacing='5px'>
                <IoIosNotificationsOutline/>

                </VStack>
                

            </Flex>

        </Box>


<div className="h-3/4 w-full flex flex-col justify-center items-center">


  
       
<div className="w-3/4 mr-5  h-16 rounded-2xl bg-gray-300 flex justify-center items-center text-black mt-10 mb-10 ">
        <Flex w="100%" justifyContent='space-around' alignItems='center'>
            <Button rounded={15} backgroundColor='white'><Text color='black'>Cards</Text></Button>
            <Button><Text rounded={5} color='black'>Accounts</Text></Button>

        </Flex>


    </div>

    <Modal
        // initialFocusRef={initialRef}
        // finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Make Payment</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>EOA</FormLabel>
              <Input  onChange={(e) => setEoa(e.target.value)} required={true}  placeholder='0x64657YT563EURWE7689QU' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Reason</FormLabel>
              <Select  required={true} size='sm' maxW="50%" w='100%'  placeholder='Select option'  onChange={(e) => setReason(e.target.value)}>
  <option value='utility'>Utility</option>
  <option value='friends'>Friends</option>  
  <option value='transfers'>Transfers</option>
</Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Amount</FormLabel>
              <NumberInput isRequired={true}
      onChange={(valueString) => setValue(valueString)}
      value={format(value)}
      max={50}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleCashout}>
              Cashout
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    <div  className="w-3/4 mr-5  h-1/4 rounded-2xl bg-[#438883] bg-opacity-10 flex justify-center items-center text-black mt-10 mb-10 ">
        <Flex w="100%" justifyContent='space-around' alignItems='center'>
            <div className="bg-[#FFFFFF] rounded-full h-20 w-20 flex justify-center items-center"><RiBankFill color="green" className="w-20 h-10"/></div>
            <div className=" flex flex-col justify-center items-start ">
                <Text fontSize='sm'>Onramp</Text>
                <Text fontSize='sm'>Connect your bank </Text>
                <Text fontSize='sm'>account to deposit & fund </Text>
            </div>
            
            <FaCircleCheck color="green"  className="w-8 h-8"/>
           

        </Flex>


    </div>
    <div  onClick={onOpen}  className="w-3/4 mr-5  h-24 rounded-2xl bg-gray-300 flex justify-center items-center text-black mt-10 mb-10 ">
        
    <Flex  w="100%" justifyContent='space-around' alignItems='center' paddingRight={2}>
            <div className=" rounded-full h-10 w-10 flex justify-center items-center"><SiCashapp  color="#888888" className="w-10 h-10"/></div>
            <div className=" flex flex-col justify-center items-start ">
                <Text fontSize='sm'>Withdraw to EOA</Text>
                <Text fontSize='sm'>internet transfer </Text>
                
            </div>
            
          

        </Flex>
        


    </div>
    <div className="w-3/4 mr-5  h-16 rounded-2xl   border-green-400 border-2 flex justify-center items-center text-black mt-10 mb-10 ">
        <Flex w="100%" justifyContent='space-around' alignItems='center'>
            <Button color='green'>Next</Button>
            
        </Flex>


    </div>
    </div>

   





      </Flex>
    </div>
  );
}
