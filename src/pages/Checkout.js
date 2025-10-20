"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useOrders } from "../contexts/OrderContext";
import PageBanner from "../components/PageBanner";
import "./Checkout.css";

function Checkout() {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { createOrder } = useOrders();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    district: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (cartItems.length === 0) {
    return (
      <div className="checkout-page">
        <PageBanner title="Túi xanh - Nảy hạt" subtitle="Thanh toán" imageUrl="/images/about-banner.png" />
        <div className="empty-checkout">
          <h3>Giỏ hàng của bạn đang trống</h3>
          <button className="btn" onClick={() => navigate("/sanpham")}>
            Tiếp tục mua sắm
          </button>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Vui lòng nhập họ tên";
    if (!formData.phone.trim()) newErrors.phone = "Vui lòng nhập số điện thoại";
    else if (!/^[0-9]{10,11}$/.test(formData.phone.replace(/\s/g, "")))
      newErrors.phone = "Số điện thoại không hợp lệ";
    if (!formData.email.trim()) newErrors.email = "Vui lòng nhập email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Email không hợp lệ";
    if (!formData.address.trim()) newErrors.address = "Vui lòng nhập địa chỉ";
    if (!formData.city.trim()) newErrors.city = "Vui lòng chọn tỉnh/thành phố";
    if (!formData.district.trim())
      newErrors.district = "Vui lòng chọn quận/huyện";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const order = createOrder({
        customer: formData,
        items: cartItems,
        total: getCartTotal(),
      });

      clearCart();

      setTimeout(() => {
        navigate("/orders", { state: { orderId: order.id, newOrder: true } });
      }, 500);
    } catch (error) {
      console.error("[v0] Error creating order:", error);
      alert("Có lỗi xảy ra. Vui lòng thử lại.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="checkout-page">
      <PageBanner title="Túi xanh - Nảy hạt" subtitle="Thanh toán" imageUrl="/images/about-banner.png" />

      <div className="checkout-content">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h3>Thông tin khách hàng</h3>

          <div className="form-group">
            <label htmlFor="fullName">
              Họ và tên <span className="required">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={errors.fullName ? "error" : ""}
            />
            {errors.fullName && (
              <span className="error-message">{errors.fullName}</span>
            )}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">
                Email <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                Số điện thoại <span className="required">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? "error" : ""}
              />
              {errors.phone && (
                <span className="error-message">{errors.phone}</span>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="address">
              Địa chỉ <span className="required">*</span>
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Số nhà, tên đường"
              className={errors.address ? "error" : ""}
            />
            {errors.address && (
              <span className="error-message">{errors.address}</span>
            )}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">
                Tỉnh/Thành phố <span className="required">*</span>
              </label>
              <select
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={errors.city ? "error" : ""}
              >
                <option value="">Chọn tỉnh/thành phố</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                <option value="Đà Nẵng">Đà Nẵng</option>
                <option value="Hải Phòng">Hải Phòng</option>
                <option value="Cần Thơ">Cần Thơ</option>
              </select>
              {errors.city && (
                <span className="error-message">{errors.city}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="district">
                Quận/Huyện <span className="required">*</span>
              </label>
              <input
                type="text"
                id="district"
                name="district"
                value={formData.district}
                onChange={handleChange}
                className={errors.district ? "error" : ""}
              />
              {errors.district && (
                <span className="error-message">{errors.district}</span>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="notes">Ghi chú đơn hàng (tùy chọn)</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="4"
              placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
            />
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Đang xử lý..." : "Đặt hàng"}
          </button>
        </form>

        <div className="order-summary">
          <h3>Đơn hàng của bạn</h3>

          <div className="summary-items">
            {cartItems.map((item) => (
              <div key={item.id} className="summary-item">
                <div className="item-info">
                  <span className="item-name">
                    {item.name} - {item.size}
                  </span>
                  <span className="item-qty">x{item.quantity}</span>
                </div>
                <span className="item-price">
                  {(item.price * item.quantity).toLocaleString("vi-VN")} đ
                </span>
              </div>
            ))}
          </div>

          <div className="summary-totals">
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
          </div>

          <div className="payment-info">
            <h4>Phương thức thanh toán</h4>
            <p>Thanh toán khi nhận hàng (COD)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
