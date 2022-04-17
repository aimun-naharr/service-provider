
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import RequireAuth from './RequireAuth';
import Checkout from './Components/Checkout/Checkout';
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <div>
    <Header></Header>
  <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/home' element={<Home></Home>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/blogs' element={<Blogs/>}></Route>
    <Route path='/checkout' element={
    <RequireAuth>
    <Checkout></Checkout>
    </RequireAuth>}>

    </Route>
    <Route path='*' element={<NotFound></NotFound>}></Route>
  </Routes>
    </div>
  );
}

export default App;
