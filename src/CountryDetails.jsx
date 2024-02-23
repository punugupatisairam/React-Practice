import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CountryDetails() {
  let cparams =useParams();
  console.log(cparams);
  let [countrydetails,setCountrydetails] = React.useState(null);

  useEffect(()=>{
    axios.get(`https://restcountries.com/v3.1/name/${cparams.cname}?fullText=true`).then((res)=>{
          setCountrydetails(res.data[0])
          console.log(res);
    })

  },[cparams])
  return (
    <div className='border border-black border-3'>
      {
        countrydetails &&<div>
                  <img src={countrydetails.flags.png} alt="" /> <br />
                 <span>{countrydetails.name.common}</span><br />
                 <span>{countrydetails.capital}</span>  
                 </div>
        }
      
    </div>
  )
}

export default CountryDetails