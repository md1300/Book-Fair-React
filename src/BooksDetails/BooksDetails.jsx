import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


    


const BooksDetails = () => {
    const loadBooks=useLoaderData()
    const {id}=useParams()
    const loadBook=loadBooks.find(book=>book.bookId===id)


    const notify = () =>{
        const toastCondition=loadBook
        if(toastCondition){
            toast('add to read')
        }
        else{
            toast('already read')
        }
    } 
    
    return (
        <div className="grid grid-cols-3">
            <div className="col-span-1 p-5">
                <img className="w-60 h-44" src={loadBook.image} alt="" srcset="" />
            </div>
            <div className="col-span-2 p-5">
                 <h1>{loadBook.bookName}</h1>
                 <h3>by : {loadBook.author} </h3>
                 <h3 className="border-y-2 border-y-indigo-500 my-6">{loadBook.category}</h3>
                 <h3>review:{loadBook.review}</h3>
                 <div className="flex gap-5">
                    <h3>tag</h3>
                    <h3 className="text-orange-400 bg-stone-100 rounded-lg">#young Adult</h3>
                    <h3 className="text-orange-400 bg-stone-100 rounded-lg">#Identity</h3>
                 </div>
                 
                 <div className="border-t-2  border-y-indigo-500 my-6">
                    <h3>number of pages    : {loadBook.totalPages}</h3>
                    <h3>publisher          : {loadBook.publisher}</h3>
                    <h3>year of publishing : {loadBook.yearOfPublishing}</h3>
                    <h3>Rating             : {loadBook.rating}</h3>
                 </div>
                 <div className="flex gap-5 my-6">
                    <button  onClick={notify} className="btn btn-accent">Read</button>
                    <button className="btn btn-accent">Wishlist</button>
                    <ToastContainer />
                 </div>
            </div>
        </div>
    );
};

export default BooksDetails;