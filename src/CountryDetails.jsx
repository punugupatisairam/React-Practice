import React from 'react'
import { useParams } from 'react-router-dom';



function CountryDetails() {
  let cparams = React.useParams();
  console.log(cparams);
  return (
    <div className='border border-black border-3 p-3'>CountryDetails</div>
  )
}

export default CountryDetails