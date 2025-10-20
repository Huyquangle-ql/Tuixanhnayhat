"use client";

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useOrders } from "../contexts/OrderContext";
import PageBanner from "../components/PageBanner";
import "./OrderTracking.css";

function OrderTracking() {
  const location = useLocation();
  const navigate = useNavigate();
  const { orders } = useOrders();
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (location.state?.orderId && location.state?.newOrder) {
      const order = orders.find((o) => o.id === location.state.orderId);
      if (order) {
        setSelectedOrder(order);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 5000);
      }
    }
  }, [location.state, orders]);

  const getStatusText = (status) => {
    const statusMap = {
      pending: "Chờ xác nhận",
      confirmed: "Đã xác nhận",
      shipping: "Đang giao hàng",
      delivered: "Đã giao hàng",
      cancelled: "Đã hủy",
    };
    return statusMap[status] || status;
  };

  const getStatusColor = (status) => {
    const colorMap = {
      pending: "#ff9800",
      confirmed: "#2196f3",
      shipping: "#9c27b0",
      delivered: "#4caf50",
      cancelled: "#f44336",
    };
    return colorMap[status] || "#666";
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (orders.length === 0) {
    return (
      <div className="order-tracking-page">
        <PageBanner title="Túi xanh - Nảy hạt" subtitle="Theo dõi đơn hàng" imageUrl="/images/about-banner.png" />
        <div className="empty-orders">
          <h3>Bạn chưa có đơn hàng nào</h3>
          <button className="btn" onClick={() => navigate("/sanpham")}>
            Bắt đầu mua sắm
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="order-tracking-page">
      <PageBanner title="Túi xanh - Nảy hạt" subtitle="Theo dõi đơn hàng" imageUrl="/images/about-banner.png" />

      {showSuccess && (
        <div className="success-banner">
          <h3>Đặt hàng thành công!</h3>
          <p>Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ liên hệ với bạn sớm nhất.</p>
        </div>
      )}

      <div className="orders-content">
        <div className="orders-list">
          <h3>Đơn hàng của bạn</h3>
          {orders.map((order) => (
            <div
              key={order.id}
              className={`order-card ${
                selectedOrder?.id === order.id ? "active" : ""
              }`}
              onClick={() => setSelectedOrder(order)}
            >
              <div className="order-header">
                <div>
                  <div className="order-id">Mã đơn hàng: {order.id}</div>
                  <div className="order-date">
                    {formatDate(order.createdAt)}
                  </div>
                </div>
                <div
                  className="order-status"
                  style={{ color: getStatusColor(order.status) }}
                >
                  {getStatusText(order.status)}
                </div>
              </div>
              <div className="order-summary">
                <span>{order.items.length} sản phẩm</span>
                <span className="order-total">
                  {order.total.toLocaleString("vi-VN")} đ
                </span>
              </div>
            </div>
          ))}
        </div>

        {selectedOrder && (
          <div className="order-details">
            <h3>Chi tiết đơn hàng</h3>

            <div className="detail-section">
              <h4>Thông tin đơn hàng</h4>
              <div className="info-row">
                <span>Mã đơn hàng:</span>
                <span className="value">{selectedOrder.id}</span>
              </div>
              <div className="info-row">
                <span>Ngày đặt:</span>
                <span className="value">
                  {formatDate(selectedOrder.createdAt)}
                </span>
              </div>
              <div className="info-row">
                <span>Trạng thái:</span>
                <span
                  className="value"
                  style={{ color: getStatusColor(selectedOrder.status) }}
                >
                  {getStatusText(selectedOrder.status)}
                </span>
              </div>
            </div>

            <div className="detail-section">
              <h4>Thông tin khách hàng</h4>
              <div className="info-row">
                <span>Họ tên:</span>
                <span className="value">{selectedOrder.customer.fullName}</span>
              </div>
              <div className="info-row">
                <span>Email:</span>
                <span className="value">{selectedOrder.customer.email}</span>
              </div>
              <div className="info-row">
                <span>Số điện thoại:</span>
                <span className="value">{selectedOrder.customer.phone}</span>
              </div>
              <div className="info-row">
                <span>Địa chỉ:</span>
                <span className="value">
                  {selectedOrder.customer.address},{" "}
                  {selectedOrder.customer.district},{" "}
                  {selectedOrder.customer.city}
                </span>
              </div>
              {selectedOrder.customer.notes && (
                <div className="info-row">
                  <span>Ghi chú:</span>
                  <span className="value">{selectedOrder.customer.notes}</span>
                </div>
              )}
            </div>

            <div className="detail-section">
              <h4>Sản phẩm</h4>
              <div className="order-items">
                {selectedOrder.items.map((item) => (
                  <div key={item.id} className="order-item">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                    />
                    <div className="item-info">
                      <div className="item-name">{item.name}</div>
                      <div className="item-size">Kích thước: {item.size}</div>
                      <div className="item-quantity">
                        Số lượng: {item.quantity}
                      </div>
                    </div>
                    <div className="item-price">
                      {(item.price * item.quantity).toLocaleString("vi-VN")} đ
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="detail-section">
              <div className="order-total-section">
                <div className="total-row">
                  <span>Tạm tính:</span>
                  <span>{selectedOrder.total.toLocaleString("vi-VN")} đ</span>
                </div>
                <div className="total-row">
                  <span>Phí vận chuyển:</span>
                  <span>Miễn phí</span>
                </div>
                <div className="total-row final">
                  <span>Tổng cộng:</span>
                  <span>{selectedOrder.total.toLocaleString("vi-VN")} đ</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderTracking;
