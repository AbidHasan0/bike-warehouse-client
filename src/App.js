import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddBike from './Pages/AddBike/AddBike';
import AllProducts from './Pages/AllProducts/AllProducts';
import BikeDetails from './Pages/BikeDetails/BikeDetails';
import Blogs from './Pages/Blogs/Blogs';
import Header from './Pages/Home/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import ManageBikes from './Pages/ManageBikes/ManageBikes';
import Footer from './Pages/Shared/Footer';
import NotFound from './Pages/Shared/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/products' element={<RequireAuth><AllProducts></AllProducts></RequireAuth>}></Route>
        <Route path='/bikeDetails/:bikesId' element={<RequireAuth><BikeDetails></BikeDetails></RequireAuth>}></Route>
        <Route path='/addbike' element={<RequireAuth><AddBike></AddBike></RequireAuth>}></Route>
        <Route path='/managebikes' element={<RequireAuth><ManageBikes></ManageBikes></RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
