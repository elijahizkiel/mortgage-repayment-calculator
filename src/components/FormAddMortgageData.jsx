import assets from '../assets/assets.js'
export default function FormAddMortgageData() {
  return (
    <form className="form-add-mortgage-data">
      <h2 className="title">Mortgage Calculator</h2>
      <button className="reset-btn">Clear All</button>
      <fieldset>
        <label htmlFor="mortgage-amount">Mortgage Amount</label>
        <input type="number" name="mortgage-amount" className="mortgage-amount" id="mortgage-amount" />
      </fieldset>
      <div className="mortgage-term">
        <label htmlFor="mortgage-term">Mortgage Term</label>
        <input type="number" id="mortgage-term" name="mortgage-term" />
        <span>years</span>
      </div>
      <div className="rate">
        <label htmlFor="interest-rate">Interest Rate</label>
        <input type="number" id="interest-rate" name="interest-rate" />
        <span>%</span>
      </div>

      <fieldset className="mortgage-type" id="mortgage-type">
        <legend>Mortgage Type</legend>

        <div className="repayment">
          <input
            type="radio"
            value="repayment"
            id="repayment"
            name="mortgage-type"
          />
          <label htmlFor="repayment">Repayment</label>
        </div>

        <div className="interes-only">
          <input
            type="radio"
            value={"interest-only"}
            id="interest-only"
            name="mortgage-type"
          />
          <label htmlFor="interest-only">Interest Only</label>
        </div>
      </fieldset>

      <button><img src={assets.calcIcon} alt="calc" />Calculate Repayments</button>
    </form>
  );
}
