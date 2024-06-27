import React, { useEffect, useState } from 'react';
import { getStoredBooksInformation } from '../../Utility/localStorage';
import { useLoaderData } from 'react-router-dom';
import Rechart from '../Rechart/Rechart';

const ReadPage = () => {
      const loaderData=useLoaderData()
      
      const [useData,setUseData]=useState([])
      

      useEffect(()=>{
        const getDataFromLocalstorage=getStoredBooksInformation()
        if(loaderData.length>0){
            const addDataToReadPage=loaderData.filter(loadData=>getDataFromLocalstorage.includes(loadData.bookId));
            setUseData(addDataToReadPage)
        }
       
      },[])


      
    
    return (
        <div>
         
                <Rechart data={useData}></Rechart>
            
            
        </div>
    );
};


export default ReadPage;