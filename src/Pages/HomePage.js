import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react"
import homeBG from '../Images/homeBG.png'
import Register from "../Components/Register"
import Login from "../Components/Login"
import { Context } from "../App"
import { useContext } from "react"

function HomePage() {
  const {authUser} = useContext(Context);
  return (
    <div>
  
            <SimpleGrid columns={{md:2}}>

            <Box height={{sm:"90vh", md:"100vh"}} p="40px">

                <Flex justifyContent="center"  p="50px" flexDirection="column">

                <Text mt={{sm:"13px",md:"200px"}} fontSize='5xl'>
                Volunteer, Have Fun, Enjoy!
                </Text>

                <Text fontSize='4xl'>Pushing for a better world everyday. We believe our act of kindness is a wave in the ocean.</Text>
                
                {!authUser && <Box m="20px 200px 30px 0px">
                    
                    <Register/>
                    <Login/>
                </Box>
                }
                
                </Flex>

                



            </Box>


            <Box bg='blue.200' height={{sm:"80vh", md:"70vh"}} mt={{md:"140px"}} borderRadius="1rem">
            <Image src={homeBG} boxShadow='dark-lg' height={{sm:"80vh", md:"70vh"}} borderRadius="1rem" ></Image>

            </Box>

            </SimpleGrid>
    </div>
  )
}

export default HomePage