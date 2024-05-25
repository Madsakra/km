import { Avatar, Tag, TagLabel } from "@chakra-ui/react";
import { useState } from "react";



function InterestPills(props) {


    const [style,setStyle] = useState("blue.300");

    function changeStyle()
    {
      if (style !=="blue.300")
        {
            props.removeItem(props.singleInterest);
            setStyle("blue.300");
           
         

        }
   

      else{
       
        props.updateInterest(props.singleInterest);
        setStyle("red.300")
       
      }
    }



  return (

    <Tag size='lg' bg={style} borderRadius='full' onClick={()=>changeStyle()}>
      <Avatar
        size='xs'
        name={props.singleInterest}
        ml={-1}
        mr={2}
      />
      <TagLabel>{props.singleInterest}</TagLabel>
    </Tag>      

  )
}

export default InterestPills
