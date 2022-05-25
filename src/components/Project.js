import React from "react";
import { Box,useColorMode, Badge, Text, Stack, Button, Flex, Spacer }from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
  } from '@chakra-ui/react';

function  Project() {
const { isOpen, onOpen, onClose } = useDisclosure();
const { colorMode, toggleColorMode} = useColorMode();

const finalRef = React.useRef();

return (

	<div className="app">
	<Box w="300px" rounded="20px" overflow="hidden" bg={ colorMode === "dark" ? "gray.700": "gray.200"} mt={10}>
		
		<Box p={5}>
		<Stack align="center">
			<Badge variant="solid" colorScheme="green"
			rounded="full" px={2}>
			Project Name
			</Badge>
		</Stack>
		<Stack align="center">
			<Text as="h2" fontWeight="normal" my={2} >
			A Computer Science Portal for Geeks
			</Text>
			<Text fontWeight="light">
			A platform for students to study CSE concepts.
			</Text>
		</Stack>
		<Flex>
			<Spacer />
			<Button variant="solid"
			colorScheme="green" size="sm" onClick={onOpen}>
				Learn More
			</Button>
            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Text fontWeight="light">
			A platform for students to study CSE concepts.
			</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
        </Modal>
		</Flex>
		</Box>
	</Box>
	</div>
);
}

export default Project;
