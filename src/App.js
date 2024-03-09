// import logo from './logo.svg';
import { Outlet } from 'react-router';
import './App.css';
import LoginForm from './Loginforms';

function App() {
  return (
    <div className="">
      <LoginForm></LoginForm>
      {/* <Outlet></Outlet> */}
    </div>
  );
}

export default App;
