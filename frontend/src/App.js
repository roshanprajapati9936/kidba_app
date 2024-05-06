import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appbar from './components/Appbar';
import Header from './components/Header';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Contact from './pages/contact'
import Blog from './pages/Blog'
import Pages from './pages/Pages';
import Register from './components/page/Auth/Register';
import LoginPage from './components/page/Auth/LoginPage';
import Dashboard from './components/page/user/Dashboard';
import { PrivateRoute } from './components/Routes/Private';
import ForgotPassword from './components/page/Auth/ForgotPassword';
import AdminDashboard from './components/page/Admin/AdminDashboard';
import CreateCategory from './components/page/Admin/CreateCategory';
import CreateProduct from './components/page/Admin/CreateProduct';
import Profile from './components/page/user/Profile';
import Orders from './components/page/user/Orders';
import UserDetails from './components/page/user/UserDetails';
import AdminDetails from './components/page/Admin/AdminDetails';
import Products from './components/page/Admin/Products';
import UpdateProducts from './components/page/Admin/UpdateProducts';
import CartPage from './context/CartPage';
import LikeNastaFood from './components/singlePage/LikeNastaFood';


function App() {
  return (
    <>
     
      <Router> 
        <Header /> 
        <Appbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/likeNastaFood/:singleId' element={<LikeNastaFood/>}/>
          <Route path='/courses' element={<Courses />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/cart' element={<CartPage/>}/>

          <Route path='/pages' element={<Pages />} />

          <Route path='/register' element={<Register />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='login' element={<LoginPage />} />


           <Route path='/dashboard' element={<PrivateRoute/>}>
            <Route path='user' element={<Dashboard />}/>
            <Route path='user' element={<UserDetails />} />
            <Route path='user/profile' element={<Profile />} />
            <Route path='user/order' element={<Orders />} />
          </Route>
            
          <Route path='/dashboard' element={<PrivateRoute />}>
           <Route path='admin' element={<AdminDashboard />}/>
           <Route path='admin' element={<AdminDetails/>} />
            <Route path='admin/create-category' element={<CreateCategory />}/>
            <Route path='admin/create-product' element={<CreateProduct/>}/>
            <Route path='admin/products' element={<Products/>}/>
            <Route path='admin/update-prducts/:id' element={<UpdateProducts/>}/>
            <Route path='admin/update-prducts' element={<UpdateProducts/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
