export default function Stats() {
  return (
    <div className="container-fluid p-0 p-md-3 mt-5">
      <div className="row p-3 p-md-5">
        {/* Text content - full width on mobile, half on desktop */}
        <div className="col-12 col-md-6 p-3 p-md-5 order-2 order-md-1">
          <h1 className="fs-2 mb-5 mb-md-3" style={{ color: "#424242" }}>
            Trust with confidence
          </h1>

          <div className="mb-4 mb-md-3">
            <h3 className="fs-4">Customer-first always</h3>
            <p className="text-muted mb-3 mb-md-4">
              That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh
              crores worth of equity investments.
            </p>
          </div>

          <div className="mb-4 mb-md-5">
            <h3 className="fs-4">No spam or gimmicks</h3>
            <p className="text-muted mb-3 mb-md-4">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>

          <div className="mb-4 mb-md-5">
            <h3 className="fs-4">The Zerodha universe</h3>
            <p className="text-muted mb-3 mb-md-4">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>

          <div className="mb-4 mb-md-5">
            <h3 className="fs-4">Do better with money</h3>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>

        {/* Image content - full width on mobile, half on desktop */}
        <div className="col-12 col-md-6 p-3 p-md-5 order-1 order-md-2">
          <img
            src="./Public/media/images/ecosystem.png"
            className="img-fluid mb-4 mb-md-0"
            style={{ height: "auto" }}
            alt="Zerodha Ecosystem"
          />
          <div className="text-center d-flex flex-column flex-md-row justify-content-center">
            <a
              href="#"
              className="mx-0 mx-md-3 mb-2 mb-md-0 text-decoration-none"
            >
              Explore our products{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="#" className="mx-0 mx-md-3 text-decoration-none">
              Try Kite demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
