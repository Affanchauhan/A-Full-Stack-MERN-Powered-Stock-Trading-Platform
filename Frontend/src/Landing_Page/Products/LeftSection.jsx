export default function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Image (always first on mobile, left on desktop) */}
        <div className="col-md-6 order-md-1 order-1">
          <img src={imageURL} className="img-fluid" alt={productName} />
        </div>

        {/* Text (always second on mobile, right on desktop) */}
        <div className="col-md-6 p-5 order-md-2 order-2">
          <h1 style={{ color: "#424242" }}>{productName}</h1>
          <p>{productDesription}</p>
          <div className="d-flex gap-4 mb-3">
            <a href={tryDemo} className="text-decoration-none">
              Try Demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href={learnMore} className="text-decoration-none">
              Learn More{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="d-flex gap-4">
            <a href={googlePlay}>
              <img
                src="./Public/media/images/googlePlayBadge.svg"
                alt="Get on Google Play"
              />
            </a>
            <a href={appStore}>
              <img
                src="./Public/media/images/appstoreBadge.svg"
                alt="Download on the App Store"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
