  import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div >
        <h1>App Commponent</h1>
        <Link to='counter'>Counter</Link>&nbsp;&nbsp;
        <Link to='header' >Header</Link> &nbsp;&nbsp;
        <Link to='todolist'>TodoList</Link> &nbsp;&nbsp;
        <Link to='countries' >Countries</Link>

        <br/>   <br/>
        <Outlet/>
      
    </div>
  );
}

export default App;
 