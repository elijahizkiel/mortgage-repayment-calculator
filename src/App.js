import FormAddMortgageData from './components/FormAddMortgageData.jsx';
import MortgageResult from './components/MortgageResult.jsx';

function App() {
  return (
    <div className="app">
      <FormAddMortgageData />
      <MortgageResult resultCalculated={!true} repayment={{monthly:100, total:20000}} />
    </div>
  );
}

export default App;
