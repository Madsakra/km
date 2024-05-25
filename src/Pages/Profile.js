import { ChatIcon, EmailIcon, StarIcon } from "@chakra-ui/icons";
import { TabList, TabPanels, Tabs,Tab, TabPanel, List, ListIcon, ListItem } from "@chakra-ui/react";


const Profile =()=>{

    return (
        <>
            <Tabs mt="40px" p="20px" colorScheme="purple" variant="enclosed">
                <TabList> 
                    <Tab _selected={{color:"white",bg:"purple.400"}}>Account Info</Tab>
                    <Tab _selected={{color:"white",bg:"purple.400"}}>Task History</Tab>
                    
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <List spacing={4}>

                            <ListItem>
                            <ListIcon as={EmailIcon}/>
                            Email: gg@netninja.dev
                            </ListItem>

                            <ListItem>
                                <ListIcon as={ChatIcon}/>
                                Lorem ipsum dolor sit amet consectecutu
                            </ListItem>

                            <ListItem>
                                <ListIcon as={StarIcon}/>
                                Lorem ipsum dolor sit amet consectecutu
                            </ListItem>
                        </List>
                    </TabPanel>


                    <TabPanel>
                        <List spacing={4}>

                            <ListItem>
                            <ListIcon as={EmailIcon}/>
                            Email: ww@mail.com
                            </ListItem>

                            <ListItem>
                                <ListIcon as={ChatIcon}/>
                                Lorem ipsum dolor sit amet consectecutu
                            </ListItem>

                            <ListItem>
                                <ListIcon as={StarIcon}/>
                                Lorem ipsum dolor sit amet consectecutu
                            </ListItem>
                        </List>
                    </TabPanel>


                    
                </TabPanels>
            </Tabs>
        </>
    )



}


export default Profile;