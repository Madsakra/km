
import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, HStack, Heading, Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react";



function DashboardCard(props) {
  return (
        <Card borderTop="8px" p="30px" ms="20px" me="20px" h="70vh" boxShadow='dark-lg' borderColor="purple.400" bg="white">
            <CardHeader>
                <Flex gap={5}> 

                    <Image src={props.image}></Image>

                </Flex>
            </CardHeader>

            <CardBody color="gray.500" textAlign="center">
                <Text dangerouslySetInnerHTML={{__html:props.body}}></Text>
            </CardBody>


            <Divider borderColor="gray.200"/>

            <Spacer/>
            <CardFooter alignItems="center" justifyContent="center">
    
                    <Button variant="ghost" bg="blue.200" size="md" leftIcon={<ViewIcon/>}>{props.action}</Button>
        
            </CardFooter>
        </Card>
  )
}

export default DashboardCard
