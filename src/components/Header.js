import { Link, useLocation } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import "./Header.css";

const Header = () => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src="/images/logo.png" alt="Túi Xanh - Nảy Hạt" className="logo-image" />
            <span className="logo-text">TÚI XANH - NẢY HẠT</span>
          </Link>
          <nav className="nav">
            <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
              Trang Chủ
            </Link>
            <Link to="/about" className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}>
              Giới Thiệu
            </Link>
            <Link to="/sanpham" className={`nav-link ${location.pathname === "/sanpham" ? "active" : ""}`}>
              Sản Phẩm
            </Link>
            <Link to="/capabilities" className={`nav-link ${location.pathname === "/capabilities" ? "active" : ""}`}>
              Túi kể chuyện xanh
            </Link>
            <Link to="/bantin" className={`nav-link ${location.pathname === "/bantin" ? "active" : ""}`}>
              Bản tin
            </Link>
            <Link to="/orders" className={`nav-link ${location.pathname === "/orders" ? "active" : ""}`}>
              Đơn hàng
            </Link>
            <Link to="/cart" className={`nav-link cart-link ${location.pathname === "/cart" ? "active" : ""}`}>
              <span className="cart-icon">🛒</span>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
            <Link to="/lienhe" className="btn nav-btn">
              Liên hệ
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
