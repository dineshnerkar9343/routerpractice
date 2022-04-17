import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar';
import Newsitems from './components/newsitems';
import Form from './components/form';
import About from './components/about';
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  

  return (
   <>
  <BrowserRouter>
  <Navbar/>
<Routes>

<Route exact path="/newsitems" element={<Newsitems/>}></Route>
<Route exact path="/about" element={<About/>}></Route>
<Route exact path="/form" element={<Form/>}></Route>

</Routes>

  </BrowserRouter>
  

  
  
 </>
  );
}

export default App;
