import logo from './logo.svg';
import './App.css';
import Header from './header';
import Mainarea from './mainarea';
import Footer from './footer';
// import Productsdata from './productsdata';
import Dummydata from './Dummydata';
import { Form } from 'formik';
import FormCreation from './FormCreation';

function App() {
  return (
    <div className="" >
     <Header/>
     <Mainarea/>
     <Footer/>

     {/* <Productsdata></Productsdata> */}
     {/* <Dummydata></Dummydata> */}
     {/* <FormCreation></FormCreation> */}
    </div>
  );
}

export default App;
