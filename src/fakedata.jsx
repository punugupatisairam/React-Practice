import React from "react";
import axios from "axios";
import { useEffect } from "react";


function Fake() {
    var [countries, setCountries] = React.useState();
    useEffect(() => {
      axios.get("https://fakestoreapi.com/products").then((res) => {
        setCountries(...countries,res);
      });
    }, []);
  
    return <div className="App">
      {
          countries.map((e)=>{
            return <li>{e.name.common}</li>
          })
      }
      </div>;
  }
  export default Fake
