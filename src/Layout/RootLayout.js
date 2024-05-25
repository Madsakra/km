import {Outlet} from 'react-router-dom'
import Navbar from '../Components/Navbar';

import { Context } from '../App';
import { useContext } from 'react';
import PopupForm from '../Components/PopupForm';

const RootLayout =()=>{

    const {authUser,setAuthUser,accountExist,setAccountExist} = useContext(Context);


    return (

        <>
            <Navbar/>
            {(authUser && accountExist===false) && <PopupForm/>}
            <Outlet/>
        
        </>
    
    
    )

}


export default RootLayout ;