import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div
      className="container-fluid d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "80vh", marginTop: "5rem" }}
    >
      <div className="text-center px-3" style={{ maxWidth: "600px" }}>
        {/* 404 Illustration */}
        <div className="mb-4">
          <svg
            width="160"
            height="160"
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="80" cy="80" r="80" fill="#F5F5F5" />
            <path
              d="M80 40L40 80L80 120L120 80L80 40Z"
              fill="#2962FF"
              fillOpacity="0.1"
              stroke="#2962FF"
              strokeWidth="2"
            />
            <path
              d="M80 60L60 80L80 100L100 80L80 60Z"
              fill="#2962FF"
              fillOpacity="0.1"
              stroke="#2962FF"
              strokeWidth="2"
            />
            <path
              d="M80 70L70 80L80 90L90 80L80 70Z"
              fill="#2962FF"
              fillOpacity="0.1"
              stroke="#2962FF"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Error Message */}
        <h1
          className="mb-3"
          style={{ fontSize: "32px", fontWeight: "500", color: "#424242" }}
        >
          404 - Page Not Found
        </h1>

        <p
          className="mb-4 text-muted"
          style={{ fontSize: "16px", lineHeight: "1.5" }}
        >
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
          <Link
            to={"/"}
            className="btn btn-primary px-4 py-2"
            style={{
              fontSize: "14px",
              fontWeight: "500",
              borderRadius: "4px",
              minWidth: "160px",
            }}
          >
            Go to Homepage
          </Link>

          <Link
            to={"/support"}
            className="btn btn-outline-primary px-4 py-2"
            style={{
              fontSize: "14px",
              fontWeight: "500",
              borderRadius: "4px",
              minWidth: "160px",
            }}
          >
            Contact Support
          </Link>
        </div>

        {/* Additional Help */}
        <div className="mt-5 pt-3 border-top">
          <p className="small text-muted mb-2">You can also try:</p>
          <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-3">
            <li>
              <Link to={"/Login"} className="text-decoration-none text-primary">
                Logging in
              </Link>
            </li>
            <li>
              <Link
                to={"/products"}
                className="text-decoration-none text-primary"
              >
                Our Products
              </Link>
            </li>
            <li>
              <Link
                to={"/pricing"}
                className="text-decoration-none text-primary"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="text-decoration-none text-primary">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
