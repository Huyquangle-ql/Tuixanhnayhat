"use client";

import { useState } from "react";
import { useOrders } from "../contexts/OrderContext";
import PageBanner from "../components/PageBanner";
import "./AdminDashboard.css";

function AdminDashboard() {
  const { orders, updateOrderStatus } = useOrders();
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

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
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleStatusChange = (orderId, newStatus) => {
    updateOrderStatus(orderId, newStatus);
    if (selectedOrder?.id === orderId) {
      setSelectedOrder({ ...selectedOrder, status: newStatus });
    }
  };

  const filteredOrders = orders.filter((order) => {
    const matchesStatus =
      filterStatus === "all" || order.status === filterStatus;
    const matchesSearch =
      searchTerm === "" ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.fullName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      order.customer.phone.includes(searchTerm);
    return matchesStatus && matchesSearch;
  });

  const stats = {
    total: orders.length,
    pending: orders.filter((o) => o.status === "pending").length,
    confirmed: orders.filter((o) => o.status === "confirmed").length,
    shipping: orders.filter((o) => o.status === "shipping").length,
    delivered: orders.filter((o) => o.status === "delivered").length,
    cancelled: orders.filter((o) => o.status === "cancelled").length,
    revenue: orders
      .filter((o) => o.status === "delivered")
      .reduce((sum, o) => sum + o.total, 0),
  };

  return (
    <div className="admin-dashboard">
      <PageBanner title="Túi xanh - Nảy hạt" subtitle="Quản trị đơn hàng" imageUrl="/images/about-banner.png" />

      <div className="admin-content">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-label">Tổng đơn hàng</div>
            <div className="stat-value">{stats.total}</div>
          </div>
          <div className="stat-card pending">
            <div className="stat-label">Chờ xác nhận</div>
            <div className="stat-value">{stats.pending}</div>
          </div>
          <div className="stat-card confirmed">
            <div className="stat-label">Đã xác nhận</div>
            <div className="stat-value">{stats.confirmed}</div>
          </div>
          <div className="stat-card shipping">
            <div className="stat-label">Đang giao</div>
            <div className="stat-value">{stats.shipping}</div>
          </div>
          <div className="stat-card delivered">
            <div className="stat-label">Đã giao</div>
            <div className="stat-value">{stats.delivered}</div>
          </div>
          <div className="stat-card revenue">
            <div className="stat-label">Doanh thu</div>
            <div className="stat-value">
              {stats.revenue.toLocaleString("vi-VN")} đ
            </div>
          </div>
        </div>

        <div className="orders-section">
          <div className="orders-header">
            <h3>Danh sách đơn hàng</h3>
            <div className="filters">
              <input
                type="text"
                placeholder="Tìm kiếm theo mã đơn, tên, SĐT..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="status-filter"
              >
                <option value="all">Tất cả trạng thái</option>
                <option value="pending">Chờ xác nhận</option>
                <option value="confirmed">Đã xác nhận</option>
                <option value="shipping">Đang giao hàng</option>
                <option value="delivered">Đã giao hàng</option>
                <option value="cancelled">Đã hủy</option>
              </select>
            </div>
          </div>

          <div className="orders-layout">
            <div className="orders-table">
              {filteredOrders.length === 0 ? (
                <div className="no-orders">Không tìm thấy đơn hàng nào</div>
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th>Mã đơn</th>
                      <th>Khách hàng</th>
                      <th>Số điện thoại</th>
                      <th>Ngày đặt</th>
                      <th>Tổng tiền</th>
                      <th>Trạng thái</th>
                      <th>Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredOrders.map((order) => (
                      <tr
                        key={order.id}
                        className={
                          selectedOrder?.id === order.id ? "selected" : ""
                        }
                        onClick={() => setSelectedOrder(order)}
                      >
                        <td className="order-id">{order.id}</td>
                        <td>{order.customer.fullName}</td>
                        <td>{order.customer.phone}</td>
                        <td>{formatDate(order.createdAt)}</td>
                        <td className="amount">
                          {order.total.toLocaleString("vi-VN")} đ
                        </td>
                        <td>
                          <span
                            className="status-badge"
                            style={{
                              backgroundColor: getStatusColor(order.status),
                            }}
                          >
                            {getStatusText(order.status)}
                          </span>
                        </td>
                        <td>
                          <button
                            className="view-btn"
                            onClick={() => setSelectedOrder(order)}
                          >
                            Xem
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            {selectedOrder && (
              <div className="order-detail-panel">
                <div className="panel-header">
                  <h4>Chi tiết đơn hàng</h4>
                  <button
                    className="close-btn"
                    onClick={() => setSelectedOrder(null)}
                  >
                    ✕
                  </button>
                </div>

                <div className="panel-section">
                  <h5>Thông tin đơn hàng</h5>
                  <div className="info-grid">
                    <div className="info-item">
                      <span className="label">Mã đơn:</span>
                      <span className="value">{selectedOrder.id}</span>
                    </div>
                    <div className="info-item">
                      <span className="label">Ngày đặt:</span>
                      <span className="value">
                        {formatDate(selectedOrder.createdAt)}
                      </span>
                    </div>
                    <div className="info-item full-width">
                      <span className="label">Trạng thái:</span>
                      <select
                        value={selectedOrder.status}
                        onChange={(e) =>
                          handleStatusChange(selectedOrder.id, e.target.value)
                        }
                        className="status-select"
                        style={{
                          borderColor: getStatusColor(selectedOrder.status),
                        }}
                      >
                        <option value="pending">Chờ xác nhận</option>
                        <option value="confirmed">Đã xác nhận</option>
                        <option value="shipping">Đang giao hàng</option>
                        <option value="delivered">Đã giao hàng</option>
                        <option value="cancelled">Đã hủy</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="panel-section">
                  <h5>Thông tin khách hàng</h5>
                  <div className="info-grid">
                    <div className="info-item">
                      <span className="label">Họ tên:</span>
                      <span className="value">
                        {selectedOrder.customer.fullName}
                      </span>
                    </div>
                    <div className="info-item">
                      <span className="label">Email:</span>
                      <span className="value">
                        {selectedOrder.customer.email}
                      </span>
                    </div>
                    <div className="info-item">
                      <span className="label">Số điện thoại:</span>
                      <span className="value">
                        {selectedOrder.customer.phone}
                      </span>
                    </div>
                    <div className="info-item full-width">
                      <span className="label">Địa chỉ:</span>
                      <span className="value">
                        {selectedOrder.customer.address},{" "}
                        {selectedOrder.customer.district},{" "}
                        {selectedOrder.customer.city}
                      </span>
                    </div>
                    {selectedOrder.customer.notes && (
                      <div className="info-item full-width">
                        <span className="label">Ghi chú:</span>
                        <span className="value">
                          {selectedOrder.customer.notes}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="panel-section">
                  <h5>Sản phẩm</h5>
                  <div className="items-list">
                    {selectedOrder.items.map((item) => (
                      <div key={item.id} className="item-row">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                        />
                        <div className="item-details">
                          <div className="item-name">{item.name}</div>
                          <div className="item-meta">
                            {item.size} - SL: {item.quantity}
                          </div>
                        </div>
                        <div className="item-price">
                          {(item.price * item.quantity).toLocaleString("vi-VN")}{" "}
                          đ
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="panel-section">
                  <div className="total-section">
                    <div className="total-row">
                      <span>Tạm tính:</span>
                      <span>
                        {selectedOrder.total.toLocaleString("vi-VN")} đ
                      </span>
                    </div>
                    <div className="total-row">
                      <span>Phí vận chuyển:</span>
                      <span>Miễn phí</span>
                    </div>
                    <div className="total-row final">
                      <span>Tổng cộng:</span>
                      <span>
                        {selectedOrder.total.toLocaleString("vi-VN")} đ
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
