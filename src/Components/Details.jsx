import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Details = () =>{
    const {id} = useParams()
    const [prod , setProd] = useState({});

    useEffect(()=>{
        getProduct()
    },[])
    const getProduct = () =>{
        fetch(`https://localhost:3003/product/${id}`)
        .then((res)=>res.json())
        .then((res)=>
        
        setProd(res))
    }
    console.log(prod)
    return (
        <div>
         <img style={{height:"100px" , width:"100px", marginTop:"3%" }} src = {prod.image} alt = ""/>
         <p style={{fontSize:"10px"}}>Category: {prod.category}</p>
         <p style={{fontSize:"10px"}}> Price: {prod.price} $</p>
         <p style={{fontSize:"10px" , height:"180px", width:"350px" ,margin :"auto"}}> Title: {prod.title} </p>
         

        </div>
    )
}