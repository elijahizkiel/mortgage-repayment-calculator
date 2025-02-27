import assets from '../assets/assets.js'

export default function MortgageResult({ resultCalculated, repayment }){
    return (
        <div className="mortgage-result">
            {!resultCalculated && <img src={assets.illustrationEmpty} alt="calcs and dollars" />}
            <div>
                <h2 className="title"> {resultCalculated?"Your results":"Results shown here"}</h2>
                {resultCalculated?
                <>
                <p className="instruction-secondary">
                    Your results are shown below based on the information you provided.
                    To adjust the results, edit the form and click "calculate repayments" again.
                </p>
                <div className="result-box">
                    <p> Your monthly repayments</p>
                    <p className="monthly-repayment">{repayment.monthly}</p>
                    <hr />
                    <p>Total you&apos;ll repay over the term</p>
                    <p>{repayment.total}</p>
                </div>
                </>
                :<p className="intruction-primary" >
                    Complete the form and click &apos;&apos;Calculate Repayments&apos;&apos;
                     to see what you monthly repayments would be.
                </p>}
                
            </div>        
        </div>
    );
};