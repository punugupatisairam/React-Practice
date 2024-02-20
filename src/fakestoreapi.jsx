import React, { useEffect } from "react";
import axios from "axios";

function Fakedata(){
    var [countries, setCountries] = React.useState([]);
    
    console.log(countries);
    useEffect(() => {
      axios.get("https://fakestoreapi.com/products").then((res) => {
        setCountries(res.data);
        
    });
    
    },[]);
  
    return (<div className=" d-flex  flex-wrap justify-content-around ">
      {
        
          countries.map((e)=>{

            return (
              <div className="w-20 border m-4 text-center shadow p-3 bg-color-warning">
                <img className="images" src={e.image} width='100px'/><br />
                <span>{e.title}</span><br />
                <span>{e.price}</span> &nbsp; &nbsp;&nbsp;
                <span>{e.rating.rate}</span>
                
            </div>  )
                           })
      }
      </div>)
}
export default Fakedata 