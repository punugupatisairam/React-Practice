import logo from './logo.svg';
import './App.css';
import Score from './scorecount';
import axios from 'axios';

function App() {
  var da = [];
  axios.get('https://restcountries.com/v3/all').then((res)=>{
    // console.log(res.data);
    da=res.data;

  })
  
  return (<div className="App">
      <Score tname='India' start={10}  inc ={5}  ></Score>
      <Score tname='Australia' start={200} inc={12}></Score>
      {
        da.map((e)=>{
          return <li>{e.name.common}</li>

        })
      }
    </div>
  );
}

export default App;
