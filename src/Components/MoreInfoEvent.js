import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure,Text } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { Context } from '../App'
import VolunteerForEvent from '../Entity/VolunteerForEvent'
import { ViewIcon } from '@chakra-ui/icons'

function MoreInfoEvent(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const {authUser} = useContext(Context);

    return (
      <>
        <Button onClick={onOpen} variant='solid' size="lg" colorScheme='blue'>
        <ViewIcon me={4}/>    
            View More Info
        </Button>
  
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{props.eventName}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6} padding={10} >
              
              <Text mb={8} fontSize='4xl'>Location: {props.location}</Text>
              <Text mb={2} fontSize='3xl'>Date: {props.startDate}</Text>
              <Text mb={2} fontSize='3xl'>Time: {props.startTime} - {props.endTime}</Text>
              <Text mb={4} fontSize='3xl' color="blue.400">Points: {props.points}</Text>
              <Text mb={3} fontSize="lg">Additional Information: {props.additionalInfo}</Text>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={async ()=>{
                await VolunteerForEvent(authUser.uid,props.singleEvent);
                setTimeout(()=>{onClose()},500)
                
              }}>
                 Volunteer for Event
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default MoreInfoEvent
