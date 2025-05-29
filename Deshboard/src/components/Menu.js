import { useState } from "react";

import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <div className="menu-container">
      <img src="logo.png" alt="App logo" style={{ width: "30px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => handleMenuClick(0)}
              style={{
                textDecoration: "none",
                color: selectedMenu === 0 ? "#ff6b6b" : "#666",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ff6b6b")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  selectedMenu === 0 ? "#ff6b6b" : "#666")
              }
            >
              <p style={{ fontWeight: 600, fontSize: "0.95rem" }}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              onClick={() => handleMenuClick(1)}
              style={{
                textDecoration: "none",
                color: selectedMenu === 1 ? "#ff6b6b" : "#666",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ff6b6b")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  selectedMenu === 1 ? "#ff6b6b" : "#666")
              }
            >
              <p style={{ fontWeight: 600, fontSize: "0.95rem" }}>Orders</p>
            </Link>
          </li>
          <li>
            <Link
              to="/holdings"
              onClick={() => handleMenuClick(2)}
              style={{
                textDecoration: "none",
                color: selectedMenu === 2 ? "#ff6b6b" : "#666",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ff6b6b")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  selectedMenu === 2 ? "#ff6b6b" : "#666")
              }
            >
              <p style={{ fontWeight: 600, fontSize: "0.95rem" }}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link
              to="/positions"
              onClick={() => handleMenuClick(3)}
              style={{
                textDecoration: "none",
                color: selectedMenu === 3 ? "#ff6b6b" : "#666",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ff6b6b")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  selectedMenu === 3 ? "#ff6b6b" : "#666")
              }
            >
              <p style={{ fontWeight: 600, fontSize: "0.95rem" }}>Positions</p>
            </Link>
          </li>
          <li>
            <Link
              to="/funds"
              onClick={() => handleMenuClick(4)}
              style={{
                textDecoration: "none",
                color: selectedMenu === 4 ? "#ff6b6b" : "#666",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ff6b6b")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  selectedMenu === 4 ? "#ff6b6b" : "#666")
              }
            >
              <p style={{ fontWeight: 600, fontSize: "0.95rem" }}>Funds</p>
            </Link>
          </li>
          <li>
            <Link
              to="/apps"
              onClick={() => handleMenuClick(6)}
              style={{
                textDecoration: "none",
                color: selectedMenu === 6 ? "#ff6b6b" : "#666",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ff6b6b")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  selectedMenu === 6 ? "#ff6b6b" : "#666")
              }
            >
              <p style={{ fontWeight: 600, fontSize: "0.95rem" }}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">AC</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
