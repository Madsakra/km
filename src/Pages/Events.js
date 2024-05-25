import React, { useEffect, useState } from 'react'
import EventCard from '../Components/EventCard'
import { SimpleGrid } from '@chakra-ui/react'
import { Timestamp, collection, getDocs } from "firebase/firestore";
import { db } from '../firebase-config';




function Events() {

 const [allEvents,setAllEvents] = useState([]);

 async function fetchAllData() {
    try {
      const querySnapshot = await getDocs(collection(db, "Events"));
      const events = [];
      querySnapshot.forEach((doc) => {
        const singleEvent = doc.data();
        const startDateTime = singleEvent.date.toDate();
        const endDateTime = singleEvent.endTime.toDate();
        
        const options = { 
            year: 'numeric', month: '2-digit', day: '2-digit', 
            hour: '2-digit', minute: '2-digit', second: '2-digit', 
            hour12: false 
          };

    
        const formattedStartTime = startDateTime.toLocaleTimeString('en-US', options)
        const formattedEndTime = endDateTime.toLocaleTimeString('en-us',options);

        const [startDate, startTime] = formattedStartTime.split(', ');
        const [endDate,endTime] = formattedEndTime.split(', ');

        singleEvent.startDate = startDate;
        singleEvent.startTime = startTime;
        singleEvent.endTime = endTime;


        events.push(singleEvent);

      });
      setAllEvents(events);
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  }

  useEffect(()=>{
    fetchAllData();
  },[])

  useEffect(()=>{
    console.log(allEvents);
  })

  return (
    <>
    <SimpleGrid columns={[2, null, 3]} ms="80px" mb="40px" spacing='40px'>

    {allEvents.map((singleEvent)=>{
        return (
            <EventCard  singleEvent ={singleEvent}
                        eventName={singleEvent.eventName}
                        location={singleEvent.location}
                        points={singleEvent.points}
                        image={singleEvent.image}
                        startDate={singleEvent.startDate}
                        startTime={singleEvent.startTime}
                        endTime={singleEvent.endTime}
                        additionalInfo={singleEvent.additionalInfo}/>
        )
    })}

    </SimpleGrid>
 
    
    </>
  )
}

export default Events
