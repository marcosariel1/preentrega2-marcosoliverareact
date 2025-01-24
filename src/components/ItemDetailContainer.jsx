import {getAsyncDataById} from "../data/getAsyncData"
import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";



export default function ItemDetailContainer() {
    const[itemInfo, setItemInfo]= useState ({});
    
    const {id} = useParams(); 
   

    useEffect (()=>{
      async function getItemData(){
            const response = await getAsyncDataById (id);  
            setItemInfo (response);
        }
        getItemData();




    } ,[id]);

console.log(itemInfo)

return <ItemDetail {...itemInfo} />;
  
}
