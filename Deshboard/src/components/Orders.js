import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Orders.css"; // optional styling file

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:3002/allOrders");
        setOrders(res.data);
      } catch (err) {
        console.error("Failed to fetch orders:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <p className="loading">Loading orders...</p>;
  }

  if (orders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to="/" className="btn">
            Get started
          </Link>
        </div>
      </div>
    );
  }

  return (
   <div className="orders">
  <h2 className="orders-title">Today's Orders</h2>
  <ul className="order-list">
    {orders.map((order, index) => (
      <li key={index} className="order-card">
        <div className="order-left">
          <h3 className="stock-name">{order.name}</h3>
          <span className={`order-mode ${order.mode.toLowerCase()}`}>
            {order.mode}
          </span>
        </div>
        <div className="order-details">
          <p><span className="label">Quantity:</span> {order.qty}</p>
          <p><span className="label">Price:</span> ₹{Number(order.price).toFixed(2)}</p>
        </div>
      </li>
    ))}
  </ul>
</div>
  );
};

export default Orders;

