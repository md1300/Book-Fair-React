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
    }
}

export {getStoredBooksInformation,saveStoredBooksInformation}