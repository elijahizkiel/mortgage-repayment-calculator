import { useState } from "react";
import assets from "../assets/assets.js";
const radioSelectedStyle = {
  borderColor: "var(--lime)",
  backgroundColor: "hsl(61, 70%, 95%)",
};

export default function FormAddMortgageData({ setRepayment, setInterestOnly }) {
  const [data, setData] = useState({
    amount: 0,
    rate: 0,
    term: 0,
  });
  const [filled, setFilled] = useState({
    amount: 0,
    rate: 0,
    term: 0,
  });
  const [isRepayment, setIsRepayment] = useState(0);
  return (
    <form
      className="form-add-mortgage-data"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <header className="header">
        <h2 className="title">Mortgage Calculator</h2>
        <button className="reset-btn">Clear All</button>
      </header>

      <div className="mortage-amount-box">
        <label htmlFor="mortgage-amount">Mortgage Amount</label>
        <div
          className="inputs"
          style={filled.amount === 1 ? { borderColor: "red" } : null}
        >
          <span
            className="unit"
            style={
              filled.amount === 1
                ? { color: "white", backgroundColor: "red" }
                : null
            }
          >
            &pound;
          </span>
          <input
            type="number"
            name="mortgage-amount"
            className="mortgage-amount"
            id="mortgage-amount"
            value={data.amount !== 0 ? data.amount : ""}
            onChange={(e) => {
              setFilled((prev) => {
                return {
                  ...prev,
                  amount: e.target.value !== "" ? 2 : 1,
                };
              });
            }}
            onInput={(e) => {
              const value = e.target.value > 0 ? e.target.value : 0;
              setData((prev) => {
                return { ...prev, amount: value };
              });
            }}
          />
        </div>
        {filled.amount === 1 && (
          <p style={{ color: "red" }}>This field is required!</p>
        )}
      </div>
      <div className="term-rate">
        <div className="mortgage-term">
          <label htmlFor="mortgage-term">Mortgage Term</label>
          <div
            className="inputs"
            style={filled.term === 1 ? { borderColor: "red" } : null}
          >
            <input
              type="number"
              id="mortgage-term"
              value={data.term ? data.term : ""}
              name="mortgage-term"
              onChange={(e) => {
                setFilled((prev) => {
                  return {
                    ...prev,
                    term: e.target.value !== "" ? 2 : 1,
                  };
                });
              }}
              onInput={(e) => {
                setData(() => {
                  return { ...data, term: e.target.value };
                });
              }}
            />
            <span
              className="unit"
              style={
                filled.term === 1
                  ? { color: "white", backgroundColor: "red" }
                  : null
              }
            >
              years
            </span>
          </div>
          {filled.term === 1 && (
            <p style={{ color: "red" }}>This field is required!</p>
          )}
        </div>
        <div className="rate">
          <label htmlFor="interest-rate">Interest Rate</label>
          <div
            className="inputs"
            style={filled.rate === 1 ? { borderColor: "red" } : null}
          >
            <input
              type="number"
              value={data.rate ? data.rate : ""}
              id="interest-rate"
              name="interest-rate"
              onChange={(e) => {
                setFilled((prev) => {
                  return {
                    ...prev,
                    rate: e.target.value !== "" ? 2 : 1,
                  };
                });
              }}
              onInput={(e) => {
                setData(() => {
                  return { ...data, rate: e.target.value ? e.target.value : 0 };
                });
              }}
            />
            <span
              className="unit"
              style={
                filled.rate === 1
                  ? { color: "white", backgroundColor: "red" }
                  : null
              }
            >
              %
            </span>
          </div>
          {filled.rate === 1 && (
            <p style={{ color: "red" }}>This field is required!</p>
          )}
        </div>
      </div>

      <div className="result-type-box">
        <label>Mortgage Type</label>
        <div
          className="result-type  inputs"
          style={isRepayment === 1 ? radioSelectedStyle : null}
          on
        >
          <input
            type="radio"
            checked={isRepayment === 1}
            id="repayment"
            name="mortgage-type"
            className="radio type"
            onChange={() => {
              setInterestOnly(false);
              setIsRepayment(1);
            }}
          />
          <label className="type-label" htmlFor="repayment">
            Repayment
          </label>
        </div>

        <div
          className="result-type inputs"
          style={isRepayment === 2 ? radioSelectedStyle : null}
        >
          <input
            type="radio"
            checked={isRepayment === 2}
            onChange={() => {
              setInterestOnly(true);
              setIsRepayment(2);
            }}
            id="interest-only"
            name="mortgage-type"
            className="radio type"
          />
          <label className="type-label" htmlFor="interest-only">
            Interest Only
          </label>
        </div>
      </div>
      <button
        className="repay-btn"
        onClick={() => {
          setRepayment(
            handleRepayment(
              data.amount,
              data.term,
              data.rate,
              isRepayment === 2
            )
          );
        }}
      >
        <img src={assets.calcIcon} alt="calc" />
        Calculate Repayments
      </button>
    </form>
  );
}

function handleRepayment(amount, term, rate) {
  rate /= 1200;
  term *= 12;
  let repayment =
    (amount * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
  let interest = repayment * term - amount;
  return { monthly: repayment, total: repayment * term, interest: interest };
}