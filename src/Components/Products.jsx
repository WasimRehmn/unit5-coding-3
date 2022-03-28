import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export const Product = () =>{
    const [data,setData] = useState([])
    useEffect(()=>{
        getData()
    },[])

    const getData = () =>{
        fetch("http://localhost:3003/product")
        .then((res)=>res.json())
        .then((res)=>(
            setData(res)
        ))
    }
    return (
        <div>
          {data.map((e,i)=>(
             <div style={{width:"250px" , margin:"auto" , marginBottom:"5px" , fontSize:"10px"}} key = {i}>{e.id}. <Link to = {`/product/${e.id}`} style={{textDecoration:"none"}}>{e.title}</Link></div>
                ))}
        </div>
    )
}