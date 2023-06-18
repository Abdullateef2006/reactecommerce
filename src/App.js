// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Signin from './components/Signin';
import { Routes, Route } from 'react-router-dom';
// import Login from './components/Signup';
import Orderpage from './components/Orderpage';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Setting from './components/Setting';
import Cart from './components/Cart';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path='/' element={<Products produce={production}/>} /> */}
        <Route path='/Login' element={<Signin />} />
        <Route path='/SignUp' element={<Signup />} />
        <Route path='/Order' element={<Orderpage />} />
        <Route path='/Account' element={<Profile/>}/>
        <Route path='/Setting' element={<Setting/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>



      </Routes>

      <Footer/>
      {/* <Orderpage/> */}

      {/* <Products/> */}

    </>
  );
}

export default App;
