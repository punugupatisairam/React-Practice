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
  
    return (<div className=" mdiv">
      {
        
          countries.map((e)=>{

            return (
              <div className="itediv">
                <img className="images" src={e.image} /><br />
                <span>{e.title}</span><br />
                <span>{e.price}</span> &nbsp; &nbsp;&nbsp;
                <span>{e.rating.rate}</span>
                
            </div>  )
                           })
      }
      </div>)
}
export default Fakedata 

