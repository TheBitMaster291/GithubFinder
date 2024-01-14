"use client";
import { Box, Button, Flex, Image, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import HistoryModal from './HistoryModal';

const Navbar = () => {
const {isOpen,onOpen,onClose}=useDisclosure();

  return (
  <Flex justifyContent={"space-between"} py={6} alignItems={"center"}>
    <Box position={"relative"} width="100px" maxHeight="20px">
        <Image src="/logo.png" fill alt='github logo' sx={{filter:"invert(1)"}}/>
    </Box>
    <Box>
        <Button size="md" colorScheme='teal' onClick={onOpen}>
            Search History
        </Button>
    </Box>
{isOpen && <HistoryModal isOpen={isOpen} onClose={onClose}/>}

  </Flex>
  )
}

export default Navbar;