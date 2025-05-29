export default function Awards() {
  return (
    <div className="container">
      <div className="row">
        {/* Image column - with increased mobile margin */}
        <div className="col-12 col-md-6 p-md-5 pb-4 pb-md-0 pt-5 text-center text-md-start">
          <img
            src="./Public/media/images/largestBroker.svg"
            className="img-fluid mb-4 mb-md-0"
            alt="Largest Broker in India"
          />
        </div>

        {/* Content column - with increased mobile margins */}
        <div className="col-12 col-md-6 p-md-5 pt-4 pt-md-5">
          <h1 className="mb-3 mb-md-4" style={{ color: "#424242" }}>
            Largest stock broker in India
          </h1>
          <p className="mb-4 mb-md-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          {/* List items - with increased mobile spacing */}
          <div className="row mb-4 mb-md-5 g-3">
            <div className="col-12 col-md-6">
              <ul className="mb-3 mb-md-0">
                <li className="mb-3 mb-md-2">
                  <p className="m-0">Futures and Options</p>
                </li>
                <li className="mb-3 mb-md-2">
                  <p className="m-0">Commodity derivatives</p>
                </li>
                <li className="mb-3 mb-md-2">
                  <p className="m-0">Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6">
              <ul>
                <li className="mb-3 mb-md-2">
                  <p className="m-0">Stocks & IPOs</p>
                </li>
                <li className="mb-3 mb-md-2">
                  <p className="m-0">Direct mutual funds</p>
                </li>
                <li className="mb-3 mb-md-2">
                  <p className="m-0">Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Press logos - with increased top margin on mobile */}
          <div className="text-center text-md-start mt-4 mt-md-0">
            <img
              src="./Public/media/images/pressLogos.png"
              className="img-fluid"
              style={{ maxWidth: "90%" }}
              alt="Press Coverage"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
