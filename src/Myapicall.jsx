import React, { useState, useEffect } from "react";
import axios from "axios";

function Myapicall() {

    var [res,setRes] = useState([])
    let [data,SetData]=useState(null)
    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all').then((data)=>{
            // console.log(data)
            setRes(data.data)
        })
    },[])
    // console.log(res)
    console.log(data?.name) //optional change good to use, it will show undefined instead of null   
   
  return (
    <div>
        {
            res.map((p)=>{
                return <div>
                            <span>{p.capital}</span> &nbsp;, &nbsp;
                            <span>{p.name.common}</span>
                        </div> 
            })
        }
     
    </div>
  )
}

export default Myapicall
