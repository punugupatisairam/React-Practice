import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Todolist from './Todolist';

function App() {
  return (
    <div className="mystyle">
    <h1>Welcome to Redux</h1>
    <Counter> </Counter>
    <Todolist></Todolist>
    </div>
  );
}

export default App;
