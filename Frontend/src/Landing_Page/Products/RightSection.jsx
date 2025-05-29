export default function RightSection({
  imageURL,
  productName,
  productDesription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Image (always first on mobile, right on desktop) */}
        <div className="col-md-6 d-flex justify-content-center order-md-2 order-1">
          <img src={imageURL} className="img-fluid" alt={productName} />
        </div>

        {/* Text (always second on mobile, left on desktop) */}
        <div className="col-md-6 p-5 order-md-1 order-2">
          <h1 style={{ color: "#424242" }}>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={learnMore} className="text-decoration-none">
              Learn More{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
