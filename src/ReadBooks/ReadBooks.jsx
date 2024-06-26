import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooksInformation } from "../../Utility/localStorage";


const ReadBooks = () => {
    const booksInformation=useLoaderData();
    
    const [listedBooksList,setListedBooksList]=useState([])

    useEffect(()=>{
        const booksInformationId= getStoredBooksInformation()
        
     if(booksInformation.length>0){
        const booksIdInformation=booksInformation.filter(bookIdInformation=>booksInformationId.includes(bookIdInformation.bookId))
        setListedBooksList(booksIdInformation)
       }   
    },[])
   
    return (
       <div>
        {
            listedBooksList.map(listedBookList=><div className="border border-2 p-3 m-4">
                <h1>{listedBookList.bookName}</h1>
                <h2>{listedBookList.author}</h2>
                
            </div>)
        }
       </div>
    );
};

export default ReadBooks;