import logo from './logo.svg';
import './App.css';
import Loginpage from './Loginpage';
import Products from './Products';
import { Outlet } from 'react-router';
function App() {
  return (
    <div className="">
      {/* <Loginpage></Loginpage>
      <Products></Products> */}
      
      <Outlet></Outlet>
    </div>
  );
}

export default App; 
