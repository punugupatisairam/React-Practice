import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Newdata(props) {
  return (
    <div>
        <table>        {
            props.newdata.map((itemnew)=>{
                return ( 
                <tr className='border border-2'>
                    <td className='border border-2'> <img src={itemnew.image} alt="" /> </td>
                    <td className='border border-2'>{itemnew.title}</td>
                    <td className='border border-2'>{itemnew.price}</td>
                    <td className='border border-2'>{itemnew.rating.rate}</td>

                </tr>)
            })
        }
        </table>

    </div>
  )
}

export default Newdata