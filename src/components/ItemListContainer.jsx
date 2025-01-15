

import './CardProducts.css'
import getAsyncData, { getAsyncDataByCategory } from '../data/getAsyncData';
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { use } from 'react';
import { useParams } from 'react-router-dom';



export default function ItemListContainer({greeting}) {

    const [products, setProducts]= useState ([]);
    console.log ("render de ItemListContainer");

    const {catid} = useParams();
    

    useEffect (()=> {
        if (catid === undefined){

            const respuestaPromise = getAsyncData();
            console.log (respuestaPromise);
            respuestaPromise
            .then( respuesta => setProducts(respuesta))
            .catch ((error)=>alert(error));
        } 
        else {
            const respuestaPromise = getAsyncDataByCategory(catid);
            console.log (respuestaPromise);
            respuestaPromise
            .then( respuesta => setProducts(respuesta))
            .catch ((error)=>alert(error));
        }
        
    }, []);

    return <>
        
        <section className='flex-container'>
            <ItemList greeting={greeting} products= {products}></ItemList>      
        </section>


   

    </>
}