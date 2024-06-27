import { json } from "react-router-dom"
import { toast } from "react-toastify";

const getIdInLocalStorage=()=>{
    const getWishlistBooksId=localStorage.getItem('wish-id')
 
    if(getWishlistBooksId){
        return JSON.parse(getWishlistBooksId)
    }
    return []

} ;
const saveIdInLocalStorage=(id)=>{
    const saveBooksId=getIdInLocalStorage();
    const exist=saveBooksId.find(booksId=>booksId===id);
    if(!exist){
        saveBooksId.push(id)
        localStorage.setItem('wish-id',JSON.stringify(saveBooksId))
        return toast.success('added to wishlist ')
    }
    return toast.error('allready existed wishlist')
}
export{getIdInLocalStorage,saveIdInLocalStorage}