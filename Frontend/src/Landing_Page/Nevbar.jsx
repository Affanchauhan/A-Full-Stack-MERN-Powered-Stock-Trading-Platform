import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-white border-bottom py-2 fixed-top">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to={"/"}>
          <img
            src="./Public/media/images/logo.svg"
            alt="Zerodha Logo"
            style={{ height: "20px" }}
          />
        </Link>

        {/* Nav Items - Always visible */}
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center flex-row">
          {/* Main Links */}
          <li className="nav-item">
            <Link
              className="nav-link"
              to={"/about"}
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                padding: "8px 12px",
                color: "#666",
              }}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link "
              to={"/products"}
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                padding: "8px 12px",
                color: "#666",
              }}
            >
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to={"/pricing"}
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                padding: "8px 12px",
                color: "#666",
              }}
            >
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to={"support"}
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                padding: "8px 12px",
                color: "#666",
              }}
            >
              Support
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to={"/Signup"}
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                padding: "8px 12px",
                color: "#666",
              }}
            >
              Signin
            </Link>
          </li>

          {/* Divider */}
          <li className="nav-item">
            <div
              style={{
                borderLeft: "1px solid #dee2e6",
                height: "24px",
                margin: "0 16px",
                color: "#666",
              }}
            ></div>
          </li>
  <li className="nav-item">
          <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer"  style={{
                height: "24px",
                margin: "0 16px",
                color: "#666",
                textDecoration:"none"
                
              }}>
  Dashboard
</a>
          </li>
        </ul>
      </div>

      {/* Hover Styles */}
      <style jsx>{`
        .nav-link:hover {
          color: #2962ff !important;
        }
      `}</style>
    </nav>
  );
}
