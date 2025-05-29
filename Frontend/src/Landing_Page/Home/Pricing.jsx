export default function Pricing() {
  return (
    <div className="container">
      <div className="row">
        {/* Left column - full width on mobile, 4 columns on desktop */}
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <h1 className="mb-3 fs-2" style={{ color: "#424242" }}>
            Unbeatable pricing
          </h1>
          <p className="mb-3 mb-md-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-decoration-none">
            See Pricing{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* Spacer - hidden on mobile, 2 columns on desktop */}
        <div className="d-none d-md-block col-md-2"></div>

        {/* Right column - full width on mobile, 6 columns on desktop */}
        <div className="col-12 col-md-6 mb-5">
          <div className="row text-center">
            {/* Pricing box 1 - full width on mobile, auto on desktop */}
            <div className="col-12 col-md-6 p-3 border mb-3 mb-md-0">
              <h1 className="mb-3">₹0</h1>
              <p className="m-0">
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>

            {/* Pricing box 2 - full width on mobile, auto on desktop */}
            <div className="col-12 col-md-6 p-3 border">
              <h1 className="mb-3">₹20</h1>
              <p className="m-0">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
