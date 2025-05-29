const Summary = () => {
  return (
    <>
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>₹37,428</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>₹12,750</span>
            </p>
            <p>
              Opening balance <span>₹50,178</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              ₹1,550 <small>+5.20%</small>
            </h3>
            <p>Today's P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>₹31,430</span>
            </p>
            <p>
              Total Investment <span>₹29,880</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
