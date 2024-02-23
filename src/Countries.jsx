import React, { useEffect } from 'react'
import axios from 'axios'
import { Link, Outlet } from 'react-router-dom'
function Countries() {
    let [countries,setCountries] = React.useState([])

    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all').then((res)=>{
        setCountries(res.data)
        console.log(res.data);
    })
    },[])
  
  return (
    <div className='d-flex '>
        <ul className='w-75'>
        {
           countries.map((country)=>{
            return <li>
               <Link to={`countrydetails/${country.name.common}`} >{country.name.common}</Link> </li>
           }) 
        }
        </ul>
        <div className='w-25'>
        <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Countries