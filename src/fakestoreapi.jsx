// import React, { useEffect } from "react";
// import axios from "axios";

// function Fakedata(){
//     var [countries, setCountries] = React.useState([]);

//     console.log(countries);
//     useEffect(() => {
//       axios.get("https://fakestoreapi.com/products").then((res) => {
//         setCountries(res.data);

//     });

//     },[]);

//     return (<div className=" mdiv">
//       {

//           countries.map((e)=>{

//             return (
//               <div className="itediv">
//                 <img className="images" src={e.image} /><br />
//                 <span>{e.title}</span><br />
//                 <span>{e.price}</span> &nbsp; &nbsp;&nbsp;
//                 <span>{e.rating.rate}</span>

//             </div>  )
//                            })
//       }
//       </div>)
// }
// export default Fakedata

import React from "react";
import axios from "axios";
function Fakedata() {
  var [products, setProducts] = React.useState();
  React.useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res);
      setProducts([...res.data]);
    });
  }, []);

  return (
    <div>
      {products?.map((product) => {
        return <ol>
		<span> <img src={product.image} alt="" /></span>
		<li style={{listStyleType:'none'}}>{product.title}</li>
		<span>{product.price}</span> &nbsp; &nbsp;
		<span>{product.rating.rate}</span>
		</ol>
      })}
    </div>
  );
}
export default Fakedata;
