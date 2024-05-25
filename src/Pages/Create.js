import { Box, FormControl, FormLabel,
    Textarea,  
    Button,
    SimpleGrid,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Flex,
    Avatar,
    Heading,
    Text,
    Divider,
    Input,
    SkeletonCircle,
    SkeletonText} from "@chakra-ui/react";
import { useState } from "react";
import { Form } from "react-router-dom";


import CallGemini from "../API/CallGemini";

const Create =()=>{

    const [uploadedFiles, setUploadedFiles] = useState([])
    const [loading,setLoading] = useState(false);
    const [desc,setDesc] = useState("");
    const [reply,setReply] = useState("Ask Gemini Anything");




    // step 2 -> push files into array
    function handleUploadFiles(files){
        const uploaded = [...uploadedFiles];
        files.some((file) => {
            uploaded.push(file);
        })

        setUploadedFiles(uploaded);
        
    }


     // step 1 - > after files uploaded
    function handleFiles(e)
    {
        const chosenFiles = Array.prototype.slice.call(e.target.files);
        handleUploadFiles(chosenFiles);
    }


    // when user press submit button
    async function submitForm(){
  
        setLoading(true);
        const aiText = await CallGemini(uploadedFiles,desc)
        setReply(aiText);
        setUploadedFiles([]);
        setLoading(false);
    }


    return (
        <>

         <SimpleGrid mb="50px">
         {!loading &&
            <Card>
                <CardHeader>
                        <Flex gap={5}> 

                            <Avatar name="Gemini" bg="pink.300"></Avatar>
                            <Box ms="50px">
                                <Heading as="h3" size="sm">Gemini Flash AI</Heading>
                                <Text>by Gemini-Flash 1.5</Text>
                            </Box>
                        </Flex>
                </CardHeader>

                <Divider borderColor="gray.300"/>

                <CardBody color="pink.400">
                    {!loading && <Text>{reply}</Text>}
                </CardBody>
                
                <CardFooter>


                </CardFooter>
            </Card>}

         {loading && 
            <Box padding='6' boxShadow='lg' bg='white'>
            <SkeletonCircle size='10' />
            <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
            </Box>
         }
        </SimpleGrid> 

    



        <Box maxW='480px'>
            <Form>
                <FormControl mb="40px" onChange={(e)=>setDesc(e.target.value)}>
                    <FormLabel>Task Description</FormLabel>
                    <Textarea placeholder="Enter a detailed description for the task..." name="description"/>
                    <Input id='fileUpload' mt="20px" p="5px"type='file' multiple accept='application/pdf, image/png, image/jpeg' onChange={(e)=>handleFiles(e)}/>
                </FormControl>



                <Button onClick={()=>submitForm()}>Submit</Button>
            </Form>
        </Box>
        </>
    )



}


export default Create;