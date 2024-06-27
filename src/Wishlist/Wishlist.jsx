import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

import { getIdInLocalStorage } from "../../Utility2/LocalStorage2";

import { IoLocationOutline } from "react-icons/io5";
import { MdPeopleOutline } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";


const Wishlist=()=>{
   const totalWishlistBooks=useLoaderData()
   
    const [wishlists,setWishlists]=useState([]);

    useEffect(()=>{
        const wishlistBooks=getIdInLocalStorage();
        if(wishlistBooks.length>0){
           const wishlistBook=totalWishlistBooks.filter(wishListBook=>wishlistBooks.includes(wishListBook.bookId));
           setWishlists(wishlistBook)

        }
    },[])
    // console.log(wishlists)
    return (
        <div>
           {
            wishlists.map(wishlist=><div className=" border-2 p-3 m-4">
                <div className="grid grid-cols-3 gap-x-20">
                    <div className="col-span-1">
                        <img src={wishlist.image} alt="" srcset="" />
                    </div>
                    <div className="col-span-2">
                        <h1>{wishlist.bookName}</h1>
                        <h2>by : {wishlist.author}</h2>
                        <h2 className="flex gap-6 my-7 "><span>tag </span><span>#{wishlist.tags[0]}</span> <span>#{wishlist.tags[1]}</span> <span>#{wishlist.tags[2]}</span>
                        <span className="flex gap-2 items-center"><span><IoLocationOutline /> </span> <span>year of publishing :{wishlist.yearOfPublishing}</span></span>
                        </h2>
                        <h2 className="flex gap-6"><span className="flex gap-2 items-center"><span><MdPeopleOutline /></span><span>publisher :{wishlist.publisher}</span></span><span className="flex gap-2 items-center"><span><RiPagesLine /></span><span>pages {wishlist.totalPages}</span></span></h2>

                       <div className="flex gap-6 items-center my-5">
                         <h1 className="text-white bg-red-300 rounded-md">catagory : {wishlist.category}</h1>
                         <h1 className="text-white bg-red-300 rounded-md">Rating   :  {wishlist.rating}</h1>
                         <button className="btn btn-accent">view details</button>
                        </div>
                    </div>
                </div>
                
            </div>)
           }
        </div>
    );
};

export default Wishlist;