export default function OpenAccount() {
  return (
    <div className="container p-5 mb-5 text-center">
      <div className="d-flex flex-column gap-4">
        <h1 className="mt-5" style={{ color: "#424242" }}>
          Open a Zerodha account
        </h1>
        <p className="mb-0">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="btn btn-primary fs-5 py-2"
          style={{
            width: "100%",
            maxWidth: "200px",
            margin: "0 auto",
          }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}
