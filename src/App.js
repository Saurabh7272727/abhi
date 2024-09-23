import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './MainFiles/Home.js'
import Cart from './MainFiles/Cart';
import Contact from './MainFiles/Contact';
import Login from './MainFiles/Login.js';
import Product from './MainFiles/Product.js';
import SingleProductPage from './MainFiles/SingleProductPage.js';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/SingleProductPage/:id' element={<SingleProductPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
