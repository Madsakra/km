import { useEffect, useState } from "react";
import { myModel } from "../firebase-config";
import QuestCard from "../Components/QuestCard";
import { Box, HStack } from "@chakra-ui/react";

function Quest() {

  const [quests,setQuests] = useState([]);
  const [loading,setLoading] = useState(true);

  const photoUrl = ["https://artsology.com/blog/wp-content/uploads/2023/09/screen-shot-2023-04-13-at-10-35-31-am.webp","https://mustsharenews.com/wp-content/uploads/2023/04/bill-gates-ai.jpg","https://english.cdn.zeenews.com/sites/default/files/2023/04/10/1181454-untitled-design-2023-04-10t133710.907.jpg"]
  
  async function generateQuests() {
    
    // Provide a prompt that contains text
    const prompt = "Please generate a JSON array containing three random acts of kindness. Each object in the array should have the following keys: `act`, `points`, and `issuer`. The `act` key should have a description of the act of kindness, the `points` key should have an integer value representing the points awarded for completing the act, and the `issuer` key should have a string with the name and occupation of the person suggesting the act.  Use a variety of acts, occupations, and issuer in your response.All issuer names must be of male"
    // To generate text output, call generateContent with the text input
    const result = await myModel.generateContent(prompt);
    
  
  
    const response = result.response;
    const text = response.text();
    console.log(text);
    
    const [firsthalf,secondhalf] = text.split("json")
    const [first,second] = secondhalf.split("```")

  

    let jsonObject = JSON.parse(first);
    console.log(jsonObject)
    setQuests([...jsonObject]);
  
    setTimeout(()=>{
      setLoading(false)
    },1000)
  }


  useEffect(()=>{
    setLoading(true);
    generateQuests()

  },[])

  return (
    <>
  <HStack gap={10} alignItems="center" justifyContent="center">
    <Box >
  {!loading && quests?.map((quest,index)=>{
    return (
    
    <QuestCard act={quest.act} 
                     issuer={quest.issuer}
                     job={quest.job}
                     image={photoUrl[index]}/>
  )})}

  {loading && <h1>LOADING...</h1>}

  </Box>
  </HStack>
    </>
  )
}

export default Quest;
