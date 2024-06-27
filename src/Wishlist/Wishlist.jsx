import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

import { getIdInLocalStorage } from "../../Utility2/LocalStorage2";


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
                <h1>{wishlist.bookName}</h1>
                <h2>{wishlist.author}</h2>
            </div>)
           }
        </div>
    );
};

export default Wishlist;