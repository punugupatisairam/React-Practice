import axios from "axios";
import React from "react";

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
