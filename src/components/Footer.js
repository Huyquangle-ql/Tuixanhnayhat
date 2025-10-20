import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      {/* --- Phần CTA --- */}
      <div className="footer-cta">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h3>Sẵn sàng gieo mầm hành động xanh cùng bạn</h3>
              <p>
                Liên hệ với chúng tôi để được tư vấn hoặc hợp tác
                <span className="cta-icons">📞 hoặc ✈️</span>
              </p>
            </div>
            <Link to="/lienhe" className="btn cta-btn">
              Liên hệ ngay
            </Link>
          </div>
        </div>
      </div>

      {/* --- Phần Footer chính --- */}
      <div className="footer-main">
        <div className="footer-content">
          {/* Cột 1: Logo */}
          <div className="footer-section">
            <div className="footer-logo-box">
              <img
                src="/images/logo.png"
                alt="Túi Xanh - Nảy Hạt Logo"
                className="logo-image"
              />
              <p className="logo-text">Túi Xanh – Nảy Hạt</p>
            </div>
          </div>

          {/* Cột 2: Công Ty */}
          <div className="footer-section">
            <h4>Công Ty</h4>
            <ul>
              <li>
                <a href="/about">Giới thiệu</a>
              </li>
              <li>
                <a href="/products">Sản phẩm</a>
              </li>
              <li>
                <a href="/capabilities">Túi kể chuyện</a>
              </li>
              <li>
                <a href="/news">Bản tin</a>
              </li>
              <li>
                <a href="/contact">Liên hệ</a>
              </li>
            </ul>
          </div>

          {/* Cột 3: Hỗ trợ */}
          <div className="footer-section">
            <h4>Hỗ trợ</h4>
            <ul>
              <li>
                <a href="#">Chính sách đổi trả</a>
              </li>
              <li>
                <a href="#">Chính sách giao hàng</a>
              </li>
              <li>
                <a href="#">Chính sách chiết khấu</a>
              </li>
            </ul>
          </div>

          {/* Cột 4: Liên hệ */}
          <div className="footer-section">
            <h4>Liên hệ</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>0325550961</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✈️</span>
                <span>tuixanhnayhat@gmail.com</span>
              </div>
            </div>
            <div className="social-media">
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">YouTube</a>
            </div>
          </div>
        </div>
      </div>

      {/* --- Phần Copyright --- */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2025 Túi Xanh - Nảy Hạt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
