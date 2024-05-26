import { AddIcon, ExternalLinkIcon, HamburgerIcon, UnlockIcon } from "@chakra-ui/icons"
import { Avatar, AvatarBadge, Box, Button, Flex, HStack, Heading, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Spacer, Text, useDisclosure, useToast } from "@chakra-ui/react"
import { auth,googleProvider } from "../firebase-config"
import React, { useContext, useState } from "react"
import { Context } from "../App"
import Volteer365_Logo from '../Images/Volunteer365_Logo.png'
import { Link } from "react-router-dom"

import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import Login from "./Login"
import Register from "./Register"


function Navbar() {

  const toast = useToast()
  const {authUser,setAuthUser,setAccountExist} = useContext(Context);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()

  const [emailField,setEmailField] = useState("");
  const [password,setPasswordField] = useState("");

  const showToast = ()=>{
    toast({
      title:'logged out',
      description:'Successfully Logged Out',
      duration: 5000,
      isClosable:true,
      status:'success',
      position:'top',
      icon: <UnlockIcon/>
    })
  }


  async function logOut()
  {
     await auth.signOut();
     setAuthUser(null);
     setAccountExist(false);
     showToast();

     console.log(auth);
  }




  return (
    <Flex as="nav" boxShadow='xl' p="25px" alignItems="center" mb="40px" gap="10px" bg="white">
        <HStack as={Link} to='/'>
        <Image src={Volteer365_Logo}  w="70px"></Image>
        <Heading as="h1" ms="20px">Volunteer 365 </Heading>
        </HStack>
        <Spacer/>

      
        {authUser && 
        <HStack spacing="60px" fontWeight="bold">
        <Text fontSize='3xl' as={Link} to='/dashboard'>DashBoard</Text>
        <Text fontSize='3xl' as={Link} to='/events'>Events</Text>
        <Text fontSize='3xl' as={Link} to='/rewards'>Rewards</Text>
        <Text fontSize='3xl' as={Link} to='/quest'>Quest</Text>
        </HStack>
        }
        <Spacer/>
        <HStack spacing="20px">
        <Avatar name="mario" bg="purple">
    
        </Avatar>
        <Text>Account Email</Text>
        {authUser !==null && <Button colorScheme="purple" onClick={()=>logOut()}>Logout</Button>}
        {/* {authUser ===null &&  <Register/>}
        {authUser ===null &&  <Login/>} */}
        
        {!authUser && <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<HamburgerIcon />}
          variant='outline'
        />
        <MenuList maxW="10px">
          <MenuItem>
            <Register/>
          </MenuItem>
          <MenuItem>
            <Login/>
          </MenuItem>

        </MenuList>
      </Menu>}

        </HStack>
    </Flex>
  )
}

export default Navbar
