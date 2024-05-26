import { AddIcon } from '@chakra-ui/icons'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Stack,
    Box,
    FormLabel,
    Input,
    InputGroup,
    InputRightAddon,
  
    Select,
    Text,
    Container,
  } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { auth,googleProvider } from '../firebase-config'
import { createUserWithEmailAndPassword,signInWithPopup } from 'firebase/auth'

function Register() {


    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()


    const [emailField,setEmailField] = useState("");
    const [passwordField,setPasswordField] = useState("");
  
    
    

    async function createAcc()
    {


      if (emailField !== "" && passwordField !=="")
        {
          createUserWithEmailAndPassword(auth,emailField,passwordField).then((userCredentials)=>{
            const user = userCredentials.user;
            console.log(user);
            //sign out user after they log in 
            auth.signOut();
            onClose();

          }).catch((err)=>{
            console.log(err)
          })
        }
    }
    
    const signInWithGoogle = async () => {
      try {
        await signInWithPopup(auth, googleProvider);
        alert("Welcome!");
        onClose();
      } catch (err) {
        console.error(err);
      }
    };


    return (
    <>
        <Button leftIcon={<AddIcon />} bg="orange.400" width="30vw" mb="20px" me="20px" onClick={onOpen}>
            <Text fontWeight="bold">Register</Text>
        </Button>

        <Container>
      <Drawer isOpen={isOpen} size='md' placement='right' initialFocusRef={firstField}
        onClose={onClose}>
            
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            Create a new account
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing='24px'>

              <Box>
                <FormLabel>Email</FormLabel>
                <InputGroup>
                  <Input
                    ref={firstField}
                    type='email'
                    id='email'
                    placeholder='Please enter email'
                    onChange={(e)=>setEmailField(e.target.value)}
                  />
                </InputGroup>
              </Box>

              <Box>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type='password'
                    id='password'
                    placeholder='Please enter password'
                    onChange={(e)=>setPasswordField(e.target.value)}
                    
                  />

                </InputGroup>
              </Box>




            </Stack>
          </DrawerBody>    

          <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue' onClick={()=>createAcc()}>Register</Button>
            <Button colorScheme='blue' ms="4" onClick={()=>signInWithGoogle()}>Sign In With Google</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      </Container>
    </>
  )
}

export default Register
