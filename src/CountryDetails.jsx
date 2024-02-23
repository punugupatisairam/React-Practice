import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CountryDetails() {
  let cparams =useParams();
  console.log(cparams);
  let [countrydetails,setCountrydetails] = React.useState();

  useEffect(()=>{
    axios.get(`https://restcountries.com/v3.1/name/{name}/${cparams.cname}?fullText=true`).then((res)=>{
          setCountrydetails(res.data)
          console.log(res);
    })

  },[])
  return (
    <div className='border border-black border-3 p-3'>
      {
        countrydetails &&<div>
                  <img src={countrydetails.flags.png} alt="" /> 
                 <span>{countrydetails.name.common}</span>
                 <span>{countrydetails.capital}</span>
                 </div>
        }
      
    </div>
  )
}

export default CountryDetails