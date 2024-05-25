import { db } from "../firebase-config";
import { collection, addDoc,getDocs } from "firebase/firestore"; 


async function VolunteerForEvent(UID,event) {

    


    async function CheckEventExist(UID,event) {
        let eventExist = false;
        const querySnapshot = await getDocs(collection(db, "User_Events"));
    
        for (const doc of querySnapshot.docs) {
            const data = doc.data();
            console.log(data.event.eventName)
            if (data.UID === UID && data.event.eventName === event.eventName) {
                alert("You have already signed up for the event");
                eventExist = true;
                break;  // Exit the loop early if the event is found
            }
        }
    
        return eventExist;
    }

    const checkResult = await CheckEventExist(UID,event);
    console.log(checkResult);
    if (!checkResult)
    {
        const docRef = await addDoc(collection(db,"User_Events"),{
            UID:UID,
            event:event
        })
        alert("Successfully volunteered, hope to see you there!");
    }

}

export default VolunteerForEvent