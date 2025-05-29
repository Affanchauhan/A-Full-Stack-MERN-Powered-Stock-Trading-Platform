export default function Universe() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row text-center">
        <div className="col-12">
          <h1
            className="mb-3"
            style={{ color: "#424242", fontSize: "2.5rem", fontWeight: "500" }}
          >
            The Zerodha Universe
          </h1>
          <p className="mb-5" style={{ fontSize: "1.25rem", color: "#666" }}>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        <div className="row justify-content-center">
          {/* Partner Item 1 */}
          <div className="col-lg-4 col-md-6 p-4">
            <div className="p-3 h-100">
              <img
                src="./Public/media/images/zerodhaFundhouse.png"
                className="img-fluid mb-3"
                style={{ height: "35px", width: "auto", objectFit: "contain" }}
                alt="Zerodha Fundhouse"
              />
              <p
                className="text-muted"
                style={{ fontSize: "1rem", lineHeight: "1.6" }}
              >
                Our asset management venture that is creating simple and
                transparent index funds to help you save for your goals.
              </p>
            </div>
          </div>

          {/* Partner Item 2 */}
          <div className="col-lg-4 col-md-6 p-4">
            <div className="p-3 h-100">
              <img
                src="./Public/media/images/sensibullLogo.svg"
                className="img-fluid mb-3"
                style={{ height: "35px", width: "auto", objectFit: "contain" }}
                alt="Sensibull"
              />
              <p
                className="text-muted"
                style={{ fontSize: "1rem", lineHeight: "1.6" }}
              >
                Options trading platform that lets you create strategies,
                analyze positions, and examine data points like open interest,
                FII/DII, and more.
              </p>
            </div>
          </div>

          {/* Partner Item 3 */}
          <div className="col-lg-4 col-md-6 p-4">
            <div className="p-3 h-100">
              <img
                src="./Public/media/images/streakLogo.png"
                className="img-fluid mb-3"
                style={{ height: "35px", width: "auto", objectFit: "contain" }}
                alt="Streak"
              />
              <p
                className="text-muted"
                style={{ fontSize: "1rem", lineHeight: "1.6" }}
              >
                Investment research platform that offers detailed insights on
                stocks, sectors, supply chains, and more.
              </p>
            </div>
          </div>

          {/* Partner Item 4 */}
          <div className="col-lg-4 col-md-6 p-4">
            <div className="p-3 h-100">
              <img
                src="./Public/media/images/streakLogo.png"
                className="img-fluid mb-3"
                style={{ height: "35px", width: "auto", objectFit: "contain" }}
                alt="Streak"
              />
              <p
                className="text-muted"
                style={{ fontSize: "1rem", lineHeight: "1.6" }}
              >
                Systematic trading platform that allows you to create and
                backtest strategies without coding.
              </p>
            </div>
          </div>

          {/* Partner Item 5 */}
          <div className="col-lg-4 col-md-6 p-4">
            <div className="p-3 h-100">
              <img
                src="./Public/media/images/smallcaseLogo.png"
                className="img-fluid mb-3"
                style={{ height: "35px", width: "auto", objectFit: "contain" }}
                alt="Smallcase"
              />
              <p
                className="text-muted"
                style={{ fontSize: "1rem", lineHeight: "1.6" }}
              >
                Thematic investing platform that helps you invest in diversified
                baskets of stocks on ETFs.
              </p>
            </div>
          </div>

          {/* Partner Item 6 */}
          <div className="col-lg-4 col-md-6 p-4">
            <div className="p-3 h-100">
              <img
                src="./Public/media/images/dittoLogo.png"
                className="img-fluid mb-3"
                style={{ height: "35px", width: "auto", objectFit: "contain" }}
                alt="Ditto"
              />
              <p
                className="text-muted"
                style={{ fontSize: "1rem", lineHeight: "1.6" }}
              >
                Personalized advice on life and health insurance. No spam and no
                mis-selling. Sign up for free
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 mt-4">
          <button
            className="btn btn-primary py-2 px-4"
            style={{
              fontSize: "1.1rem",
              fontWeight: "500",
              backgroundColor: "#387ed1",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Sign up now
          </button>
        </div>
      </div>
    </div>
  );
}
