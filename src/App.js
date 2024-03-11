import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Todolist from './Todolist';
import Products from './Products';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     {/* <Counter></Counter>
     <Todolist></Todolist>
     <Products></Products> */}
    

     <Link to='count'> <span>Counter</span> </Link> &nbsp;&nbsp;
     <Link to='todos'> <span>Todolist</span> </Link> &nbsp;&nbsp;
     <Link to='prods'> <span>Products</span> </Link> &nbsp;&nbsp;
     <Link to='newprod'> <span>NewProducts</span> </Link> <br/> <br/>
     <Outlet></Outlet>
    </div>
  );
}

export default App;
