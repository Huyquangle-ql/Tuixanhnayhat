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
  const [sampleOrders, setSampleOrders] = useState(() => [
    {
      date: "18/10/2025",
      source: "Website",
      customer: "Thanh Trà",
      phone: "0987593996",
      product: "Túi làm từ vỏ ngô",
      quantity: 1,
      unitPrice: 35000,
      shippingFee: 0,
      total: 35000,
      status: "delivered",
    },
    {
      date: "22/10",
      source: "Website",
      customer: "Phương Ngọc",
      phone: "0919777886",
      product: "Túi làm từ vỏ ngô",
      quantity: 3,
      unitPrice: 35000,
      shippingFee: 0,
      total: 105000,
      status: "pending",
    },
    {
      date: "24/10",
      source: "Website",
      customer: "Hương Quỳnh",
      phone: "0374672000",
      product: "Túi làm từ vỏ ngô",
      quantity: 2,
      unitPrice: 35000,
      shippingFee: 0,
      total: 70000,
      status: "confirmed",
    },
    {
      date: "30/10/2025",
      source: "Website",
      customer: "Chu Văn Mạnh",
      phone: "",
      product: "Túi làm từ vỏ ngô",
      quantity: 3,
      unitPrice: 35000,
      shippingFee: 0,
      total: 105000,
      status: "shipping",
    },
    {
      date: "2/11",
      source: "Website",
      customer: "Vui Lê",
      phone: "0983973191",
      product: "Túi làm từ vỏ ngô",
      quantity: 6,
      unitPrice: 35000,
      shippingFee: 31000,
      total: 210000,
      status: "delivered",
    },
  ]);

  const getStatusText = (status) => {
    const statusMap = {
      pending: "Chờ xác nhận",
      confirmed: "Đã xác nhận",
      shipping: "Đang giao hàng",
      delivered: "Đã giao hàng",
      cancelled: "Đã hủy",
      returned: "Đã trả hàng",
      refunded: "Đã hoàn tiền",
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
      returned: "#ff5722",
      refunded: "#795548",
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

  const handleReset = () => {
    setSearchTerm("");
    setFilterStatus("all");
  };

  const formatNumber = (value) =>
    typeof value === "number" ? value.toLocaleString("vi-VN") : value;

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

  // Tính toán thống kê theo yêu cầu
  const orderStatusStats = {
    waitingPickup: orders.filter((o) => o.status === "shipping").length, // Chờ lấy hàng
    processed: orders.filter((o) => o.status === "confirmed").length, // Đã xử lý
    returnedRefundedCancelled: orders.filter((o) =>
      ["cancelled", "returned", "refunded"].includes(o.status)
    ).length, // Đơn trả hàng/ Hoàn tiền/ Hủy
    delivered: orders.filter((o) => o.status === "delivered").length, // Đã giao
  };

  const fixedRevenue = 525000;

  const salesAnalysis = {
    revenue: fixedRevenue,
    pageViews: 157, // Có thể lấy từ analytics hoặc localStorage
    productClicks: 26, // Có thể lấy từ analytics hoặc localStorage
    totalOrders: orders.length,
  };

  const stats = {
    total: orders.length,
    pending: orders.filter((o) => o.status === "pending").length,
    confirmed: orders.filter((o) => o.status === "confirmed").length,
    shipping: orders.filter((o) => o.status === "shipping").length,
    delivered: orders.filter((o) => o.status === "delivered").length,
    cancelled: orders.filter((o) => o.status === "cancelled").length,
    revenue: fixedRevenue,
  };

  return (
    <div className="admin-dashboard">
      <PageBanner
        title="Túi xanh - Nảy hạt"
        subtitle="Quản trị đơn hàng"
        imageUrl="/images/about-banner.png"
      />

      <div className="admin-content">
        {/* Phần Quản lý đơn hàng */}
        <div className="order-management-section">
          <h2 className="section-title">Quản lý đơn hàng</h2>

          {/* Tình trạng đơn hàng */}
          <div className="order-status-section">
            <h3 className="subsection-title">
              Tình trạng đơn hàng - Liệt kê con số xem có bao nhiêu đơn trong
              các tình trạng sau:
            </h3>
            <div className="order-status-grid">
              <div className="order-status-item">
                <span className="status-label">Chờ lấy hàng</span>
                <span className="status-value red">
                  {orderStatusStats.waitingPickup}
                </span>
              </div>
              <div className="order-status-item">
                <span className="status-label">Đã xử lý</span>
                <span className="status-value red">
                  {orderStatusStats.processed}
                </span>
              </div>
              <div className="order-status-item">
                <span className="status-label">
                  Đơn trả hàng/ Hoàn tiền/ Hủy
                </span>
                <span className="status-value red">
                  {orderStatusStats.returnedRefundedCancelled}
                </span>
              </div>
              <div className="order-status-item">
                <span className="status-label">Đã giao</span>
                <span className="status-value red">
                  {orderStatusStats.delivered}
                </span>
              </div>
            </div>
          </div>

          {/* Phân tích bán hàng */}
          <div className="sales-analysis-section">
            <h3 className="subsection-title">Phân tích bán hàng:</h3>
            <div className="sales-analysis-grid">
              <div className="sales-item">
                <span className="sales-label">Doanh số</span>
                <span className="sales-value red">
                  {salesAnalysis.revenue.toLocaleString("vi-VN")} VNĐ
                </span>
              </div>
              <div className="sales-item">
                <span className="sales-label">Lượt truy cập</span>
                <span className="sales-value red">
                  {salesAnalysis.pageViews}
                </span>
              </div>
              <div className="sales-item">
                <span className="sales-label">Product Clicks</span>
                <span className="sales-value red">
                  {salesAnalysis.productClicks}
                </span>
              </div>
              <div className="sales-item">
                <span className="sales-label">Đơn hàng</span>
                <span className="sales-value red">
                  {salesAnalysis.totalOrders}
                </span>
              </div>
            </div>
          </div>
        </div>

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

        <div className="orders-section" style={{ display: "none" }}>
          <div className="orders-header">
            <h3>Đơn Hàng</h3>
            <div className="filters">
              <div className="filter-group">
                <select className="filter-select">
                  <option>Mã đơn hàng</option>
                </select>
                <input
                  type="text"
                  placeholder="Nhập Mã đơn hàng"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
              <div className="filter-group">
                <select className="filter-select">
                  <option>Tất cả ĐVVC</option>
                </select>
              </div>
              <div className="filter-buttons">
                <button
                  className="apply-btn"
                  onClick={(e) => e.preventDefault()}
                >
                  Áp dụng
                </button>
                <button className="reset-btn" onClick={handleReset}>
                  Đặt lại
                </button>
              </div>
            </div>
          </div>

          <div className="orders-layout">
            <div className="orders-table">
              <div className="orders-count">
                {filteredOrders.length} Đơn hàng
              </div>
              {filteredOrders.length === 0 ? (
                <div className="no-orders">
                  <div className="empty-icon">📄</div>
                  <p>
                    Không có đơn sau 13/11/2023. Sử dụng Xuất báo cáo để xem
                    những đơn cũ hơn.
                  </p>
                </div>
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th>Ngày</th>
                      <th>Kênh</th>
                      <th>Khách hàng</th>
                      <th>Số điện thoại</th>
                      <th>Sản phẩm</th>
                      <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Phí vận chuyển</th>
                      <th>Tổng tiền</th>
                      <th>Trạng thái</th>
                      <th>Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredOrders.map((order) => {
                      const orderDate = new Date(order.createdAt);
                      const formattedDate = orderDate.toLocaleDateString(
                        "vi-VN",
                        {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        }
                      );
                      const mainProduct = order.items[0] || {};
                      const totalQuantity = order.items.reduce(
                        (sum, item) => sum + item.quantity,
                        0
                      );
                      const unitPrice =
                        mainProduct.price ||
                        (totalQuantity
                          ? Math.round(order.total / totalQuantity)
                          : 0);
                      const shippingFee = order.shippingFee ?? 0;
                      const source = order.source || "Website";

                      return (
                        <tr
                          key={order.id}
                          className={
                            selectedOrder?.id === order.id ? "selected" : ""
                          }
                          onClick={() => setSelectedOrder(order)}
                        >
                          <td>{formattedDate}</td>
                          <td>
                            <span className="source-badge">{source}</span>
                          </td>
                          <td>{order.customer.fullName}</td>
                          <td>{order.customer.phone ?? ""}</td>
                          <td>{mainProduct.name || "N/A"}</td>
                          <td>{totalQuantity}</td>
                          <td className="amount">{formatNumber(unitPrice)}</td>
                          <td className="amount">
                            {formatNumber(shippingFee)}
                          </td>
                          <td className="amount">
                            {formatNumber(order.total)}
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
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedOrder(order);
                              }}
                            >
                              Xem
                            </button>
                          </td>
                        </tr>
                      );
                    })}
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

        {/* Bảng mẫu theo ảnh (dữ liệu tĩnh) */}
        <div className="orders-section" style={{ marginTop: "2rem" }}>
          <div className="orders-header">
            <h3>5 Đơn hàng</h3>
          </div>
          <div className="orders-table">
            {(() => {
              const fmt = (n) => n.toLocaleString("vi-VN");
              const handleChange = (index, value) => {
                setSampleOrders((prev) => {
                  const next = [...prev];
                  next[index] = { ...next[index], status: value };
                  return next;
                });
              };
              return (
                <table>
                  <thead>
                    <tr>
                      <th>Ngày</th>
                      <th>Kênh</th>
                      <th>Khách hàng</th>
                      <th>Số điện thoại</th>
                      <th>Sản phẩm</th>
                      <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Phí vận chuyển</th>
                      <th>Tổng tiền</th>
                      <th>Trạng thái</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleOrders.map((r, idx) => (
                      <tr key={idx}>
                        <td>{r.date}</td>
                        <td>
                          <span className="source-badge">{r.source}</span>
                        </td>
                        <td>{r.customer}</td>
                        <td>{r.phone}</td>
                        <td>{r.product}</td>
                        <td style={{ textAlign: "center" }}>{r.quantity}</td>
                        <td className="amount" style={{ textAlign: "right" }}>
                          {fmt(r.unitPrice)}
                        </td>
                        <td className="amount" style={{ textAlign: "right" }}>
                          {fmt(r.shippingFee)}
                        </td>
                        <td className="amount" style={{ textAlign: "right" }}>
                          {fmt(r.total)}
                        </td>
                        <td>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.5rem",
                            }}
                          >
                            <span
                              className="status-badge"
                              style={{
                                backgroundColor: getStatusColor(r.status),
                              }}
                            >
                              {getStatusText(r.status)}
                            </span>
                            <select
                              className="status-select"
                              value={r.status}
                              onChange={(e) =>
                                handleChange(idx, e.target.value)
                              }
                            >
                              <option value="pending">Chờ xác nhận</option>
                              <option value="confirmed">Đã xác nhận</option>
                              <option value="shipping">Đang giao hàng</option>
                              <option value="delivered">Đã giao hàng</option>
                              <option value="cancelled">Đã hủy</option>
                            </select>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
