import { useState, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 35, y: 20 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);
  const context = useContext(GeneralContext);

  // Fetch current stock price when component mounts
  useEffect(() => {
    const fetchCurrentPrice = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/stockPrice/${uid}`);
        setStockPrice(response.data.price);
      } catch (err) {
        console.error("Failed to fetch current price:", err);
      }
    };
    fetchCurrentPrice();
  }, [uid]);

  const handleBuyClick = async () => {
    try {
      await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      });
      context.closeBuyWindow();
    } catch (err) {
      alert("Order failed. Please try again.");
      console.error(err);
    }
  };

  const handleCancelClick = () => {
    context.closeBuyWindow();
  };

  // Drag and drop handlers
  const handleMouseDown = (e) => {
    if (e.target.className.includes('drag-handle')) {
      setIsDragging(true);
      setDragOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  return (
    <div 
      className={`container ${isDragging ? 'dragging' : ''}`} 
      id="buy-window"
      ref={windowRef}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: isDragging ? 'scale(1.02)' : 'scale(1)',
        boxShadow: isDragging ? '0 10px 25px rgba(0,0,0,0.2)' : '0 4px 12px rgba(0,0,0,0.1)',
        position: 'absolute'
      }}
      onMouseDown={handleMouseDown}
    >
      <div className="header drag-handle">
        <h3>Buy {uid} <span>NSE</span></h3>
      </div>

      <div className="regular-order">
        <div className="inputs">
          <fieldset className={stockQuantity > 0 ? 'active' : ''}>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) => setStockQuantity(Math.max(1, Number(e.target.value)))}
              value={stockQuantity}
            />
            <div className="quantity-buttons">
              <button onClick={() => setStockQuantity(prev => Math.max(1, prev - 1))}>-</button>
              <button onClick={() => setStockQuantity(prev => prev + 1)}>+</button>
            </div>
          </fieldset>

          <fieldset className={stockPrice > 0 ? 'active' : ''}>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              min="0"
              step="0.05"
              onChange={(e) => setStockPrice(Math.max(0, Number(e.target.value)))}
              value={stockPrice.toFixed(2)}
            />
            <div className="price-buttons">
              <button onClick={() => setStockPrice(prev => Math.max(0, Number((prev - 0.05).toFixed(2))))}>-</button>
              <button onClick={() => setStockPrice(prev => Number((prev + 0.05).toFixed(2)))}>+</button>
            </div>
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
        <div>
          <Link to="#" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
          <Link 
            to="#" 
            className="btn btn-blue" 
            onClick={handleBuyClick}
            style={{ pointerEvents: stockPrice <= 0 ? "none" : "auto", opacity: stockPrice <= 0 ? 0.5 : 1 }}
          >
            Buy {uid}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
