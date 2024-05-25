import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {  Button,  SimpleGrid } from "@chakra-ui/react";
import DashboardCard from '../Components/DashboardCard'
import hours from '../Images/hours-volunteered.png'
import pointsEarned from '../Images/past-events.png'
import upcomingEvents from '../Images/upcoming-events.png';
import pastEvents from '../Images/past-events.png'
import { db } from "../firebase-config";
import { collection } from "firebase/firestore";
import { Timestamp,addDoc } from "firebase/firestore";

const DashBoard =()=>{

    const myData = [
        {image:hours, body:"Total Hours: 48 hours",action:"View LeaderBoard"},
        {image:pointsEarned, body:"Total Points Earned: 480 </br> Points Redeemed: 400 </br> Current Points: 80", action:"Redeem Points"},
        {image:upcomingEvents, body:"Beach-CleanUp - June 12 , 2024 </br> Park Restoration - June 19,2024 ", action:"View Calendar"},
        {image:pastEvents, body:"Library organization - May 22, 2024 </br> Soup Kitchen Help - May 8, 2024", action:"View History"}
    ]


      




    return (

        <SimpleGrid  spacing={10} minChildWidth="300px">

        {myData.map((activity)=>{
            return    <DashboardCard image={activity.image}
                                     body={activity.body}
                                     action={activity.action}/>
        })}



        </SimpleGrid>
    )



}


export default DashBoard;