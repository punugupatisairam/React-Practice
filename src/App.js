import logo from './logo.svg';
import './App.css';
import Header from './header';
import Mainarea from './mainarea';
import Footer from './footer';

function App() {
  return (
    <div className="border border-primary border-2 p-5 m-2" >
     <Header/>
     <Mainarea/>
     <Footer/>
    </div>
  );
}

export default App;
