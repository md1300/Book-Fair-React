import { toast } from "react-toastify";

const getStoredBooksInformation=()=>{
    const getBooksInformation=localStorage.getItem('Books-id');
    if(getBooksInformation){
        return JSON.parse(getBooksInformation)
    }
    return [] ;
}

const saveStoredBooksInformation=id=>{
    const storedBooksInformation=getStoredBooksInformation();
    const exists = storedBooksInformation.find(bookId=>bookId===id)
    if(!exists){
        
        storedBooksInformation.push(id)
        localStorage.setItem('Books-id',JSON.stringify(storedBooksInformation))
        return toast.success('add to read list')
    }
    else{
        return toast.error('allready existed')
    }
    
}

export {getStoredBooksInformation,saveStoredBooksInformation}