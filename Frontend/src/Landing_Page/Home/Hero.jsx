export default function Hero() {
  return (
    <>
      <div className="container-fluid p-5 mb-3">
        <div className="row text-center">
          <img
            src="./Public/Media/images/homeHero.png"
            alt="Hero Image"
            className="mb-2"
          />
          <h1 class="landing-heading text-center" style={{ color: "#424242" }}>
            Invest in everything
          </h1>
          <p class="landing-subheading text-center">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <button
            className="btn btn-primary fs-5 mb-2 py-2 w-100 w-md-25"
            style={{ margin: "0 auto", maxWidth: "200px" }}
          >
            Signup Now
          </button>
        </div>
      </div>
    </>
  );
}
