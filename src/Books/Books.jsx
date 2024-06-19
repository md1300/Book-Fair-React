import { useEffect, useState } from "react";


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
            <div className="grid grid-cols-3">
              {
                 booksList.map(bookList=><div key={bookList.bookId}>
                     <img src={bookList.image} alt="" srcset="" />
                     <h1>{bookList.bookName}</h1>
                     <h3>{bookList.author}</h3>
                 </div>)
              }
            </div>
            
           
        </div>
    );
};

export default Books;