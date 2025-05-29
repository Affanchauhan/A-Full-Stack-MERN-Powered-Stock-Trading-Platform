export default function Hero() {
  return (
    <section
      className="support-hero"
      style={{
        backgroundColor: "#387ed1",
        color: "white",
        marginTop: "3.5rem",
      }}
    >
      <div className="container">
        <div className="support-header py-4 d-flex justify-content-between align-items-center">
          <h4 className="m-0" style={{ fontSize: "1.5rem", fontWeight: "500" }}>
            Support Portal
          </h4>
          <a
            href="/support/tickets"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "500",
              fontSize: "1.1rem",
            }}
          >
            Track Tickets
          </a>
        </div>

        <div className="row py-5">
          <div className="col-md-6 pe-md-5">
            <h1
              className="mb-4"
              style={{
                fontSize: "1.75rem",
                fontWeight: "500",
                lineHeight: "1.4",
              }}
            >
              Search for an answer or browse help topics to create a ticket
            </h1>

            <div className="search-container position-relative mb-4">
              <input
                type="text"
                autocomplete="off"
                placeholder="Eg: how do i activate F&amp;O, why is my order getting rejected ..."
                className="w-100 p-3 ps-5"
                style={{
                  fontSize: "1rem",
                  borderRadius: "4px",
                  border: "none",
                  height: "50px",
                }}
              />
              <svg
                className="position-absolute"
                style={{
                  left: "15px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#666",
                }}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>

            <div className="quick-links">
              <a
                href="/support/account-opening"
                className="d-inline-block me-3 mb-2"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "1rem",
                }}
              >
                Track account opening
              </a>
              <a
                href="/support/segment-activation"
                className="d-inline-block me-3 mb-2"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "1rem",
                }}
              >
                Track segment activation
              </a>
              <a
                href="/support/intraday-margins"
                className="d-inline-block me-3 mb-2"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "1rem",
                }}
              >
                Intraday margins
              </a>
              <a
                href="/support/kite-manual"
                className="d-inline-block me-3 mb-2"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "1rem",
                }}
              >
                Kite user manual
              </a>
            </div>
          </div>

          <div className="col-md-6 ps-md-5 mt-4 mt-md-0">
            <h2
              className="mb-4"
              style={{ fontSize: "1.3rem", fontWeight: "500" }}
            >
              Featured
            </h2>
            <ol
              className="featured-list ps-3"
              style={{ listStyleType: "none", paddingLeft: "0" }}
            >
              <li className="mb-3">
                <a
                  href="/support/takeovers-delisting"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "1rem",
                    lineHeight: "1.5",
                  }}
                >
                  Current Takeovers and Delisting - January 2024
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="/support/intraday-leverages"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "1rem",
                    lineHeight: "1.5",
                  }}
                >
                  Latest Intraday leverages - MIS & CO
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
