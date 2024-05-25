import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore"; 


async function AccountInfo(UID,nameField,ageField,roleField) {

    const docRef = await addDoc(collection(db,"User_Account"),{
        UID:UID,
        userName:nameField,
        age:ageField,
        role:roleField,
        points:0
    })



}

export default AccountInfo
