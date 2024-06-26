import {  useState } from "react";
import { Link, Outlet,  } from "react-router-dom";




const ListedBooks = () => {
   
    
  

    const [tabIndex,setTabIndex]=useState(0)
    
   
   


    return (
    <div>
         
         

        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap dark:bg-gray-100 dark:text-gray-800">
   <Link to='read' onClick={()=>setTabIndex(0)}   className={`px-5 py-3 space-x-2 ${tabIndex===0?'border border-b-0': 'border-b'} dark:border-gray-600 dark:text-gray-600`}>
       
       <span>read books</span>
   </Link>
   <Link to='wishlist' onClick={()=>setTabIndex(1)} className={` px-5 py-3 space-x-2  ${tabIndex===1?'border border-b-0': 'border-b'} rounded-t-lg dark:border-gray-700 dark:text-gray-900`}>
       
       <span>wishlist books</span>
   </Link>

   </div>
 <Outlet></Outlet>

 
   </div>

   
    )

}

export default ListedBooks;