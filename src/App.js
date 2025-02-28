import { useState } from "react";
import FormAddMortgageData from "./components/FormAddMortgageData.jsx";
import MortgageResult from "./components/MortgageResult.jsx";

function App() {
  const [repayment, setRepayment] = useState({
    monthly: 0,
    total: 0,
    interest: 0,
  });
  const [interestOnly, setInterestOnly] = useState(false);
  const [resultCalculated, setResultCalculated] = useState(false);
  return (
    <div className="app">
      <FormAddMortgageData
        setInterestOnly={(interestOnly) => {
          setInterestOnly(interestOnly);
        }}
        setRepayment={({ monthly, total, interest }) => {
          setResultCalculated(true);
          setRepayment({ monthly: monthly, total: total, interest: interest });
        }}
      />
      <MortgageResult
        resultCalculated={resultCalculated}
        showInterestOnly={interestOnly}
        repayment={repayment}
      />
    </div>
  );
}

export default App;
