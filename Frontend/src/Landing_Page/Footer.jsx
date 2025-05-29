export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#fafafa", fontSize: "14px" }}>
      <div className="container border-top pt-5">
        <div className="row">
          {/* Logo Column */}
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <img
              src="./Public/media/images/logo.svg"
              style={{ width: "130px", marginBottom: "20px" }}
              alt="Zerodha Logo"
            />
            <p className="text-muted">
              © 2010 - {new Date().getFullYear()}, Zerodha Broking Ltd. All
              rights reserved.
            </p>
            <div className="d-flex mt-3" style={{ fontSize: "1.3rem" }}>
              <a href="#" className="me-3">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="#" className="me-3">
                <i className="fa fa-facebook-square" aria-hidden="true"></i>
              </a>
              <a href="#" className="me-3">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-6 col-md-2 mb-4 mb-md-0">
            <h6
              className="mb-3 fw-bold"
              style={{ color: "#424242", fontSize: "1.2rem" }}
            >
              Company
            </h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-muted"
                  style={{ fontSize: "1.1rem" }}
                >
                  About
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-muted"
                  style={{ fontSize: "1.1rem" }}
                >
                  Products
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-muted"
                  style={{ fontSize: "1.1rem" }}
                >
                  Pricing
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-muted"
                  style={{ fontSize: "1.1rem" }}
                >
                  Referral programme
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-muted"
                  style={{ fontSize: "1.1rem" }}
                >
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-muted"
                  style={{ fontSize: "1.1rem" }}
                >
                  Zerodha.tech
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-muted"
                  style={{ fontSize: "1.1rem" }}
                >
                  Press & media
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none text-muted"
                  style={{ fontSize: "1.1rem" }}
                >
                  Zerodha Cares (CSR)
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-6 col-md-2 mb-4 mb-md-0">
            <h6
              className="mb-3 fw-bold"
              style={{ color: "#424242", fontSize: "1.2rem" }}
            >
              Support
            </h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-muted"
                  style={{ fontSize: "1.1rem" }}
                >
                  Contact us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-muted"
                  style={{ fontSize: "1.1rem" }}
                >
                  Support portal
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-muted"
                  style={{ fontSize: "1.1rem" }}
                >
                  Z-Connect blog
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-muted"
                  style={{ fontSize: "1.1rem" }}
                >
                  List of charges
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-muted"
                  style={{ fontSize: "1.1rem" }}
                >
                  Downloads & resources
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none text-muted"
                  style={{ fontSize: "1.1rem" }}
                >
                  Videos
                </a>
              </li>
            </ul>
          </div>

          {/* Account Links */}
          <div className="col-6 col-md-2 mb-4 mb-md-0">
            <h6
              className="mb-3 fw-bold"
              style={{ color: "#424242", fontSize: "1.2rem" }}
            >
              Account
            </h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-muted"
                  style={{ fontSize: "1.1rem" }}
                >
                  Open an account
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none text-muted"
                  style={{ fontSize: "1.1rem" }}
                >
                  Fund transfer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none text-muted"
                  style={{ fontSize: "1.1rem" }}
                >
                  60 day challenge
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Text */}
        <div className="row mt-5">
          <div className="col-12">
            <p className="text-muted small">
              Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration
              no.: INZ000031633 CDSL: Depository services through Zerodha
              Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
              Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI
              Registration no.: INZ000038238 Registered Address: Zerodha Broking
              Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
              School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
              For any complaints pertaining to securities broking please write
              to{" "}
              <a
                href="mailto:complaints@zerodha.com"
                className="text-decoration-none"
              >
                complaints@zerodha.com
              </a>
              , for DP related to{" "}
              <a href="mailto:dp@zerodha.com" className="text-decoration-none">
                dp@zerodha.com
              </a>
              . Please ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </p>

            <p className="text-muted small mt-3">
              Procedure to file a complaint on SEBI SCORES: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </p>

            <p className="text-muted small mt-3">
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>

            <p className="text-muted small mt-3">
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
