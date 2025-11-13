"use client";

import { createContext, useContext, useState, useEffect } from "react";

const OrderContext = createContext();

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrders must be used within OrderProvider");
  }
  return context;
};

// Dữ liệu mẫu theo yêu cầu
const getSampleOrders = () => {
  return [
    // 1) Túi trơn x5, đơn giá 20.000, tổng 100.000
    {
      id: "ORD-001",
      customer: {
        fullName: "Phạm Đăng Hiếu",
        email: "hieu@example.com",
        phone: "0379637194",
        address: "",
        district: "",
        city: "",
      },
      items: [{ id: "item-1", name: "Túi trơn", price: 20000, quantity: 5 }],
      total: 100000,
      status: "delivered",
      createdAt: "2025-10-05T08:00:00.000Z",
      source: "Website",
      shippingFee: 0,
    },
    // 2) Túi trơn x2, đơn giá 20.000, tổng 50.000
    {
      id: "ORD-002",
      customer: {
        fullName: "Phạm Đăng Hiếu",
        email: "hieu@example.com",
        phone: "0379637194",
        address: "",
        district: "",
        city: "",
      },
      items: [{ id: "item-2", name: "Túi trơn", price: 20000, quantity: 2 }],
      total: 50000,
      status: "pending",
      createdAt: "2025-10-05T09:00:00.000Z",
      source: "Website",
      shippingFee: 0,
    },
    // 3) Túi trơn x3, số điện thoại 3796371945, tổng 60.000
    {
      id: "ORD-003",
      customer: {
        fullName: "pham dang hieu55",
        email: "hieu55@example.com",
        phone: "3796371945",
        address: "",
        district: "",
        city: "",
      },
      items: [{ id: "item-3", name: "Túi trơn", price: 20000, quantity: 3 }],
      total: 60000,
      status: "confirmed",
      createdAt: "2025-10-05T10:00:00.000Z",
      source: "Website",
      shippingFee: 0,
    },
    // 4) Túi có in hình x11, đơn giá 40.000, tổng 440.000
    {
      id: "ORD-004",
      customer: {
        fullName: "Phạm Đăng Hiếu",
        email: "hieu@example.com",
        phone: "0379637194",
        address: "",
        district: "",
        city: "",
      },
      items: [
        { id: "item-4", name: "Túi có in hình", price: 40000, quantity: 11 },
      ],
      total: 440000,
      status: "shipping",
      createdAt: "2025-10-05T11:00:00.000Z",
      source: "Website",
      shippingFee: 0,
    },
    // 5) Nike Air Force 1 Mid '07 x7, đơn giá 1.200, tổng 22.300
    {
      id: "ORD-005",
      customer: {
        fullName: "Phạm Đăng Hiếu",
        email: "hieu@example.com",
        phone: "0379637194",
        address: "",
        district: "",
        city: "",
      },
      items: [
        {
          id: "item-5",
          name: "Nike Air Force 1 Mid '07",
          price: 1200,
          quantity: 7,
        },
      ],
      total: 22300,
      status: "delivered",
      createdAt: "2025-10-05T12:00:00.000Z",
      source: "Website",
      shippingFee: 0,
    },
  ];
};

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem("orders");
    if (saved) {
      const parsed = JSON.parse(saved);
      // Nếu không có đơn hàng nào, thêm dữ liệu mẫu
      if (parsed.length === 0) {
        return getSampleOrders();
      }
      return parsed;
    }
    // Nếu chưa có dữ liệu trong localStorage, trả về dữ liệu mẫu
    return getSampleOrders();
  });

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const createOrder = (orderData) => {
    const newOrder = {
      id: `ORD-${Date.now()}`,
      ...orderData,
      status: "pending",
      createdAt: new Date().toISOString(),
    };
    setOrders((prev) => [newOrder, ...prev]);
    return newOrder;
  };

  const updateOrderStatus = (orderId, status) => {
    setOrders((prev) =>
      prev.map((order) => (order.id === orderId ? { ...order, status } : order))
    );
  };

  const getOrderById = (orderId) => {
    return orders.find((order) => order.id === orderId);
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        createOrder,
        updateOrderStatus,
        getOrderById,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
