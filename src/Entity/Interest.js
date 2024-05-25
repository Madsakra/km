import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore"; 


async function Interest(UID,interest) {

    const docRef = await addDoc(collection(db,"Interests"),{
        UID:UID,
        Interest:interest
    })



}

export default Interest
