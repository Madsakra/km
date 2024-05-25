import { collection, getDocs } from "firebase/firestore";
import { useContext } from "react";
import { Context } from "../App";
import { db } from "../firebase-config";



async function AccountExist(uid){

    let accountExist = false;

    const querySnapshot = await getDocs(collection(db, "User_Account"));
    querySnapshot.forEach((doc) => {

      const data = doc.data();
 
      if (data.UID === uid)
        {
           console.log("Account already exist")
           accountExist = true;
        }

    });

    

    return accountExist
}

export default AccountExist;