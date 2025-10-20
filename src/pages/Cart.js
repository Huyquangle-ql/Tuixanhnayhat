"use client";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import PageBanner from "../components/PageBanner";
import "./Cart.css";

function Cart() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <PageBanner title="Túi xanh - Nảy hạt" subtitle="Giỏ hàng" imageUrl="/images/about-banner.png" />
        <div className="empty-cart">
          <h3>Giỏ hàng của bạn đang trống</h3>
          <button className="btn" onClick={() => navigate("/sanpham")}>
            Tiếp tục mua sắm
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <PageBanner title="Túi xanh - Nảy hạt" subtitle="Giỏ hàng" imageUrl="/images/about-banner.png" />

      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                className="item-image"
              />
              <div className="item-details">
                <h4>{item.name}</h4>
                <p className="item-size">Kích thước: {item.size}</p>
                <p className="item-price">
                  {item.price.toLocaleString("vi-VN")} đ
                </p>
              </div>
              <div className="item-quantity">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <div className="item-total">
                {(item.price * item.quantity).toLocaleString("vi-VN")} đ
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Tổng đơn hàng</h3>
          <div className="summary-row">
            <span>Tạm tính:</span>
            <span>{getCartTotal().toLocaleString("vi-VN")} đ</span>
          </div>
          <div className="summary-row">
            <span>Phí vận chuyển:</span>
            <span>Miễn phí</span>
          </div>
          <div className="summary-total">
            <span>Tổng cộng:</span>
            <span>{getCartTotal().toLocaleString("vi-VN")} đ</span>
          </div>
          <button
            className="checkout-btn"
            onClick={() => navigate("/checkout")}
          >
            Tiến hành thanh toán
          </button>
          <button
            className="continue-shopping"
            onClick={() => navigate("/sanpham")}
          >
            Tiếp tục mua sắm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
