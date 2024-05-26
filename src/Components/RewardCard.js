import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../firebase-config';
import { Context } from '../App';
import { useContext } from 'react';


function RewardCard(props) {


    const {authUser} = useContext(Context);

  async function onRedeem()
  {
    const querySnapshot = await getDocs(collection(db, "User_Account"));
    querySnapshot.forEach(async (myDoc) => {

      const data = myDoc.data();
      const accID = myDoc.id;
      if (data.UID === authUser.uid)
        {
            if (data.currentPoints - props.points <0)
                {
                   alert("You do not have enough points to redeem")
                }
        
                else{
                    const afterDeduction = data.currentPoints - props.points;
                    console.log(afterDeduction);
                    const accountRef = doc(db, "User_Account", accID);
                    await updateDoc(accountRef, {
                        currentPoints: afterDeduction
                      });

                    alert("Succesfully redeemed");
                }
        }
      


    });

  }



  return (
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  ms={10}
  me={10}
  boxShadow='dark-lg'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={props.image}
    alt='img'
  />

  <Stack>
    <CardBody>
      <Heading fontSize='3xl' py={2}>{props.name}</Heading>

      <Text fontSize='2xl' >
        Points: {props.points}
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue' width='200px' onClick={()=>{
        onRedeem()
      }}>
        Redeem
      </Button>
    </CardFooter>
  </Stack>
</Card>
  )
}

export default RewardCard
