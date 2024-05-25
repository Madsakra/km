import { Avatar, Button, Container, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Tag, TagLabel, Text, useDisclosure } from "@chakra-ui/react";
import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../App";
import AccountInfo from "../Entity/AccountInfo";
import InterestPills from "./InterestPills";
import Interest from "../Entity/Interest";

function PopupForm() {
    const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true })
  
    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const {authUser,setAuthUser,accountExist,setAccountExist} = useContext(Context);
    
    const [nameField,setNameField] = useState("");
    const [ageField,setAgeField] = useState(0);
    const [roleField,setRoleField] = useState("volunteer");


    const [interest,setInterest] = useState([]);
    // to be false
    const [accountFinalised,setAccountFinalised] = useState(false);

    const interestGroup = ["elderly","low income family","person with disabailities","environmental"];

    async function submitParticulars()
    {
      
      const result = await AccountInfo(authUser.uid,nameField,ageField,roleField);
      alert("Account Information updated");
      setAccountFinalised(true);
    }


    function updateInterest(singleInterest)
    {
          setInterest(prevInt=>[...prevInt,singleInterest])   
    }

    function removeItem (itemToRemove) {
      setInterest(prevItems => prevItems.filter((item, index) => item !== itemToRemove));
    };

    async function submitInterest()
    {
      const result = await Interest(authUser.uid,interest);
      alert("Interest updated");
      setAccountExist(true);

    }


    return (
      <>
  

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          closeOnOverlayClick={false}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              {!accountFinalised && <Text>Complete Your Account Information</Text>}
              {accountFinalised && <Text>Choose your Interests</Text>}
            
            </ModalHeader>

            <ModalBody pb={6}>

              {!accountFinalised && 
              <>
              <FormControl>
                <FormLabel>User ID (UID):</FormLabel>
                <Input placeholder='UID' disabled value={authUser.uid} fontWeight="bold"/>
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>User Name:</FormLabel>
                <Input placeholder='your user name' type="text" ref={initialRef} onChange={(e)=>setNameField(e.target.value)} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>age</FormLabel>
                <Input placeholder='age' type="number" onChange={(e)=>setAgeField(e.target.value)} />
              </FormControl>

        
              <FormLabel htmlFor='owner' mt={4}>Select Role</FormLabel>
                <Select defaultValue='volunteer' onChange={(e)=>setRoleField(e.target.value)}> 
                  <option value='volunteer'>volunteer</option>
                  <option value='organiser'>organiser</option>
                </Select>
                </>
                }
                
                {accountFinalised && 
                <>
                
              
                  {interestGroup.map((singleInterest,index)=>{
                      return (
                      <Container p="5px">
                        <InterestPills singleInterest={singleInterest} 
                                        index={index} 
                                        updateInterest={updateInterest}
                                        removeItem={removeItem}
                                        submitInterest={submitInterest}/>
                      </Container>
                  
                      )

                  })}

                
                </>
                }


            </ModalBody>

            <ModalFooter>
              {!accountFinalised && <Button colorScheme='blue' mr={3} onClick={()=>submitParticulars()}>
                Submit
              </Button>}

              {accountFinalised && 
              <Button colorScheme='blue' mr={3} onClick={()=>submitInterest()}>
                Submit Interest
              </Button>}
   
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default PopupForm;