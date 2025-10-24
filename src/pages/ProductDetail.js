"use client";

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import { useCart } from "../contexts/CartContext";
import "./ProductDetail.css";

function ProductDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!product) {
    return (
      <div className="product-detail-page">
        <div className="empty">
          Không tìm thấy sản phẩm.{" "}
          <button onClick={() => navigate(-1)}>Quay lại</button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  return (
    <div className="product-detail-page">
      <PageBanner title="Túi xanh - Nảy hạt" subtitle="Sản phẩm" imageUrl="/images/about-banner.png" />

      <div className="detail-layout">
        <aside className="gallery">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="main"
          />
          <div className="thumbs">
            <img src="/images/tuitron2.jpg" alt="thumb 1" />
            <img src="/images/tuitron3.jpg" alt="thumb 2" />
            <img src="/images/tuitron4.jpg" alt="thumb 3" />
          </div>
        </aside>

        <section className="info">
          <h3 className="name">{product.name}</h3>
          <div className="price">{product.price.toLocaleString("vi-VN")} đ</div>
          <ul className="specs">
            <li>Loại: {product.name}</li>
            <li>Kích thước: {product.size}</li>
            <li>Màu: Tự nhiên</li>
            <li>Chất liệu: Sinh học</li>
          </ul>

          <div className="actions">
            <div className="quantity-selector">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))
                }
                min="1"
              />
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Thêm vào giỏ hàng
            </button>
          </div>

          {showSuccess && (
            <div className="success-message">Đã thêm vào giỏ hàng!</div>
          )}
        </section>
      </div>

      <section className="related">
        <h3>Sản phẩm liên quan</h3>
        <div className="related-grid">
          {[1, 2, 3].map((i) => (
            <div key={i} className="related-card">
              <img src={product.image || "/placeholder.svg"} alt="related" />
              <div className="meta">
                <div className="muted">{product.name}</div>
                <div className="muted">Kích thước: {product.size}</div>
                <div className="price">
                  {product.price.toLocaleString("vi-VN")} đ
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductDetail;
