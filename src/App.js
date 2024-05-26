
import './App.css';
import{
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'


import { createContext, useEffect } from 'react';
import { useState } from 'react';


//Pages
import RootLayout from './Layout/RootLayout'
import DashBoard from './Pages/DashBoard';

import HomePage from './Pages/HomePage';
import { auth } from './firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import AccountExist from './Entity/AccountExist';
import Events from './Pages/Events';
import Rewards from './Pages/Rewards';

import Community from './Pages/Community';

export const Context = createContext();

function App() {
 

  const [authUser,setAuthUser] = useState(null);
  const [accountExist,setAccountExist] = useState(false)
  const [account,setAccount] = useState(null);
  


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="dashboard" element={<DashBoard/>}/>
        <Route path="events" element={<Events/>}/>
        <Route path="community" element={<Community/>}/>
        <Route path="rewards" element={<Rewards/>}/>
      </Route>
    )
  )

 async function checkCall()
 {
  if (authUser)
    {
      const acExist = await AccountExist(authUser.uid)
      if (acExist === true)
      {
        setAccountExist(true);
    
      }
    }
 }



  useEffect(()=>{

    checkCall();
    console.log(account);
  })

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if (user)
        {
          setAuthUser(user);
     
        }
        else{
          console.log("no user exist")
        }
    })


  },[])

  
 

 
  return (
    <>

    <Context.Provider value={{authUser,accountExist,setAccountExist,setAuthUser,setAccount}}>

    <RouterProvider router={router}/>    
    

    </Context.Provider>

    </>

  );
}

export default App;
