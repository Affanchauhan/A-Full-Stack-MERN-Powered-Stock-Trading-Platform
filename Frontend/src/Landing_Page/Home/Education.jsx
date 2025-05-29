export default function Education() {
  return (
    <div className="container mt-3 mt-md-5">
      <div className="row align-items-center">
        {/* Image column - full width on mobile, original size on desktop */}
        <div className="col-12 col-md-6 mb-4 mb-md-0 text-center text-md-start">
          <img
            src="./Public/media/images/education.svg"
            className="img-fluid w-100 d-md-inline-block"
            style={{ maxWidth: "95%" }}
            alt="Market Education"
          />
        </div>

        {/* Content column */}
        <div className="col-12 col-md-6">
          <h1 className="mb-3 fs-2" style={{ color: "#424242" }}>
            Free and open market education
          </h1>

          <div className="mb-4">
            <p className="mb-3">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="#" className="text-decoration-none">
              Varsity{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          <div>
            <p className="mb-3 mt-3 mt-md-5">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="#" className="text-decoration-none">
              TradingQ&A{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
