import assets from "../assets/assets.js";
export default function FormAddMortgageData() {
  return (
    <form className="form-add-mortgage-data">
      <header className="header">
        <h2 className="title">Mortgage Calculator</h2>
        <button className="reset-btn">Clear All</button>
      </header>

      <div className="mortage-amount-box">
        <label htmlFor="mortgage-amount">Mortgage Amount</label>
        <div className="inputs">
          <span className="unit">&pound;</span>
          <input
            type="number"
            name="mortgage-amount"
            className="mortgage-amount"
            id="mortgage-amount"
          />
        </div>
      </div>
      <div className="term-rate">
        <div className="mortgage-term">
          <label htmlFor="mortgage-term">Mortgage Term</label>
          <div className="inputs">
            <input type="number" id="mortgage-term" name="mortgage-term" />
            <span className="unit">years</span>
          </div>
        </div>
        <div className="rate">
          <label htmlFor="interest-rate">Interest Rate</label>
          <div className="inputs">
            <input type="number" id="interest-rate" name="interest-rate" />
            <span className="unit">%</span>
          </div>
        </div>
      </div>

    <div className="result-type">
      <label>Mortgage Type</label>
      <div className="repayment  inputs">
        <input
          type="radio"
          value="repayment"
          id="repayment"
          name="mortgage-type"
          className="radio type"
        />
        <label className="type-label" htmlFor="repayment">
          Repayment
        </label>
      </div>

      <div className="interest-only inputs">
        <input
          type="radio"
          value={"interest-only"}
          id="interest-only"
          name="mortgage-type"
          className="radio type"
        />
        <label className="type-label" htmlFor="interest-only">
          Interest Only
        </label>
      </div>
      </div>
      <button className="repay-btn">
        <img src={assets.calcIcon} alt="calc" />
        Calculate Repayments
      </button>
    </form>
  );
}
