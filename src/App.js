import logo from './logo.svg';
import './App.css';
import Loginpage from './Loginpage';
import Products from './Products';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import ProductHeader from './ProductHeader';
function App() {
  return (
    <div className="">
      {/* <Loginpage></Loginpage>
      <Products></Products> */}
      <Link to='/cart'><ProductHeader className='headele'></ProductHeader></Link> 
      <Outlet></Outlet>
    </div>
  );
}

export default App; 
