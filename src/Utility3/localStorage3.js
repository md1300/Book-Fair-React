import { getStoredBooksInformation } from "../../Utility/localStorage"
import { getIdInLocalStorage } from "../../Utility2/LocalStorage2"
import { toast } from "react-toastify";

const addReadListToWishlist=()=>{
   const addData=getStoredBooksInformation()
  const addNewlist = localStorage.getItem('wishListToRead')
  if(addNewlist){
    return  JSON.parse(addNewlist)
  }
  return []
}
export {addReadListToWishlist}