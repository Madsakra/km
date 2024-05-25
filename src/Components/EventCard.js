import React from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Divider, ButtonGroup,Text, Button } from '@chakra-ui/react'
import MoreInfoEvent from './MoreInfoEvent'
function EventCard(props) {

    

    return (


        <Card maxW='sm'  boxShadow='dark-lg' alignItems="center" >
        <CardBody textAlign="center">
            <Image
            src={props.image}
            borderRadius='lg'
       
            />
            <Stack mt='6' spacing='3'>
            <Heading size='md'>{props.eventName}</Heading>
            <Text>Location: {props.location} </Text>
            <Text>Date: {props.startDate} </Text>
            <Text>Time: {props.startTime} - {props.endTime}</Text>
            <Text color='blue.600' fontSiq  ze='2xl'>
                Points: {props.points} 
            </Text>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ButtonGroup spacing='2'>
            <MoreInfoEvent singleEvent = {props.singleEvent}
                           eventName = {props.eventName}
                           location={props.location}
                           startDate={props.startDate}
                           startTime={props.startTime}
                           endTime={props.endTime}
                           points={props.points}
                           additionalInfo={props.additionalInfo} />
            </ButtonGroup>
        </CardFooter>
        </Card>
  )
}

export default EventCard
