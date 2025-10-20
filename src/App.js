import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Capabilities from "./pages/Capabilities";
import Product from "./pages/Product";
import BanTin from "./pages/BanTin";
import LienHe from "./pages/LienHe";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderTracking from "./pages/OrderTracking";
import AdminDashboard from "./pages/AdminDashboard";
import { CartProvider } from "./contexts/CartContext";
import { OrderProvider } from "./contexts/OrderContext";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <OrderProvider>
        <Router>
          <div className="App">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/capabilities" element={<Capabilities />} />
                <Route path="/product" element={<Product />} />
                <Route path="/sanpham" element={<Product />} />
                <Route path="/bantin" element={<BanTin />} />
                <Route path="/lienhe" element={<LienHe />} />
                <Route path="/productdetail" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/orders" element={<OrderTracking />} />
                <Route path="/admin" element={<AdminDashboard />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </OrderProvider>
    </CartProvider>
  );
}

export default App;
