import { UnlockIcon } from "@chakra-ui/icons"
import { Avatar, AvatarBadge, Box, Button, Flex, HStack, Heading, Image, Spacer, Text, useToast } from "@chakra-ui/react"
import { auth } from "../firebase-config"
import { useContext } from "react"
import { Context } from "../App"
import Volteer365_Logo from '../Images/Volunteer365_Logo.png'
import { Link } from "react-router-dom"


function Navbar() {

  const toast = useToast()
  const {authUser,setAuthUser,setAccountExist} = useContext(Context);

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

      

        <HStack spacing="60px" fontWeight="bold">
        <Text fontSize='3xl' as={Link} to='/dashboard'>DashBoard</Text>
        <Text fontSize='3xl' as={Link} to='/events'>Events</Text>
        <Text fontSize='3xl' as={Link} to='/rewards'>Rewards</Text>
        <Text fontSize='3xl'>LeaderBoard</Text>
        <Text fontSize='3xl'>Quiz</Text>
        </HStack>

        <Spacer/>
        <HStack spacing="20px">
        <Avatar name="mario" bg="purple">
    
        </Avatar>
        <Text>Account Email</Text>
        {authUser !==null && <Button colorScheme="purple" onClick={()=>logOut()}>Logout</Button>}
        </HStack>
    </Flex>
  )
}

export default Navbar
