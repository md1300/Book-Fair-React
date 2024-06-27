import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooksInformation } from "../../Utility/localStorage";

import { IoLocationOutline } from "react-icons/io5";
import { MdPeopleOutline } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";


const ReadBooks = () => {
    const booksInformation=useLoaderData();
    
    // console.log(booksInformation)
    const [listedBooksList,setListedBooksList]=useState([])

    useEffect(()=>{
        const booksInformationId= getStoredBooksInformation()
        
     if(booksInformation.length>0){
        const booksIdInformation=booksInformation.filter(bookIdInformation=>booksInformationId.includes(bookIdInformation.bookId))
        setListedBooksList(booksIdInformation)
       } 
    //    console.log(booksInformationId)  
    },[])
   
    return (
       <div>
        {
            listedBooksList.map(listedBookList=><div className=" border-2 p-3 m-4">
                <div className="grid grid-cols-3 gap-x-20">
                    <div className="col-span-1">
                        <img src={listedBookList.image} alt="" srcset="" />
                    </div>
                    <div className="col-span-2">
                        <h1>{listedBookList.bookName}</h1>
                        <h2>by : {listedBookList.author}</h2>
                        <h2 className="flex gap-6 my-7 "><span>tag </span><span>#{listedBookList.tags[0]}</span> <span>#{listedBookList.tags[1]}</span> <span>#{listedBookList.tags[2]}</span>
                        <span className="flex gap-2 items-center"><span><IoLocationOutline /> </span> <span>year of publishing :{listedBookList.yearOfPublishing}</span></span>
                        </h2>
                        <h2 className="flex gap-6"><span className="flex gap-2 items-center"><span><MdPeopleOutline /></span><span>publisher :{listedBookList.publisher}</span></span><span className="flex gap-2 items-center"><span><RiPagesLine /></span><span>pages {listedBookList.totalPages}</span></span></h2>

                       <div className="flex gap-6 items-center my-5">
                         <h1 className="text-white bg-red-300 rounded-md">catagory : {listedBookList.category}</h1>
                         <h1 className="text-white bg-red-300 rounded-md">Rating   :  {listedBookList.rating}</h1>
                         <button className="btn btn-accent">view details</button>
                        </div>
                    </div>
                </div>
                
            </div>)
        }
       </div>
    );
};

export default ReadBooks;