import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import NavbarComponent from './components/NavbarComponent';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import ContactPage from './pages/ContactPage';
import AddProduct from './pages/admin/AddProduct';


function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/admin/addProduct" element={<AddProduct />} />
        {/* <Route path="/admin/products" element={<ManageProducts />} />
        <Route path="/admin/users" element={<ManageUsers />} /> */}

        <Route path='/' element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/signup' element={<RegisterPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/product' element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App; 
