import { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";

const Books = () => {

    const [booksList,setBooksList]=useState([]);

    useEffect(()=>{
        fetch('BooksData.json')
        .then(res=>res.json())
        .then(data=>setBooksList(data))
    },[])


    return (
        <div>
            <h1>total books list : {booksList.length}</h1>
            <div className="grid grid-cols-3 p-4 ">
              {
                 booksList.map(bookList=><div className="m-6 bg-gray-400 p-4" key={bookList.bookId} >
                     <img className="w-60 h-44 bg-slate-400" src={bookList.image} alt="" srcset="" />
                     <div className="flex gap-5 mr-4 my-3 ">
                        <h3 className="bg-slate-400 rounded-lg p-2">young adult</h3>
                        <h3 className="bg-slate-400 rounded-lg p-2">identity</h3>
                     </div>
                     <h1>{bookList.bookName}</h1>
                     <h3>by :{bookList.author}</h3>
                     <div className="flex justify-between">
                        <h3>{bookList.category}</h3>
                        <div className="flex gap-3 items-center">
                          <h3> 5 . 00 </h3>
                          <CiStar />
                        </div>
                        
                     </div>
                    
                 </div>)
              }
            </div>
            
           
        </div>
    );
};

export default Books;