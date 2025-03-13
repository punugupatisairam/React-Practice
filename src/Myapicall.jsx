import React, { useState, useEffect } from "react";
import axios from "axios";

function Myapicall() {

    var [res,setRes] = useState(null)
    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all').then((data)=>{
            console.log(data)
            setRes(data.data)
        })
    },[])

   
  return (
    <div>
        {
            res.map((p)=>{
                return <li>{p.capital}</li>
            })
        }
     
    </div>
  )
}

export default Myapicall
