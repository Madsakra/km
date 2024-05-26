import { AddIcon, UnlockIcon} from '@chakra-ui/icons'
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
    Text,
    Container,
  } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { auth,googleProvider } from '../firebase-config';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';



export default function Login() {
  
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
  
    const [emailField,setEmailField] = useState("");
    const [password,setPasswordField] = useState("");
  


    async function normalSignIn()
    {
      try{
        const userCredentials = await signInWithEmailAndPassword(auth,emailField,password)
        const user = userCredentials.user;
        alert("Welcome!");
        onClose();
      }
      catch(err)
      {
        console.log(err)
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
        <Button leftIcon={<UnlockIcon />} bg="orange.200" width="30vw"  mb="20px" me="20px" onClick={onOpen}>
            <Text fontWeight="bold">Login</Text>
        </Button>
      <Container>



    
      <Drawer isOpen={isOpen} size='md' placement='right' initialFocusRef={firstField}
        onClose={onClose}>
            
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            Login with your credentials
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
            <Button colorScheme='blue' onClick={()=>normalSignIn()}>Login</Button>
            <Button colorScheme='blue' ms="4" onClick={()=>signInWithGoogle()}>Login With Google</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      </Container>
    </>
  )
}
