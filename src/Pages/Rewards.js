import { Box, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import RewardCard from '../Components/RewardCard'
import { collection, getDocs } from "firebase/firestore";
import { useContext } from "react";
import { Context } from "../App";
import { db } from "../firebase-config";


function Rewards() {

  const [rewards,setRewards] = useState([]);

  async function fetchRewards()
  {
    let temp = []
    const querySnapshot = await getDocs(collection(db, "Rewards"));
    querySnapshot.forEach((doc) => {

      const data = doc.data();
      temp.push(data);
    });

    setRewards(temp);

  }

  useEffect(()=>{
    fetchRewards();
  },[])

  return (
  <>
  
  <SimpleGrid columns={[2, null, 3]} spacing='40px'>

  

  {rewards.map((reward)=>{
    return <RewardCard name={reward.name}
                       image={reward.image}
                        points={reward.points}
                        />  
  })}

  </SimpleGrid>
  
  </>
  )
}

export default Rewards
