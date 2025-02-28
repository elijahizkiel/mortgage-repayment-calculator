import assets from '../assets/assets.js'

export default function MortgageResult({ resultCalculated, repayment, showInterestOnly }){
    return (
        <div className={resultCalculated?"mortgage-result resulted":"mortgage-result"}>
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
                    {
                    showInterestOnly?
                        <>
                            <p >
                            Your total interest
                            </p>
                            <p className="monthly-repayment">&pound;{repayment.interest.toFixed(2)}</p>
                        <span className='hr-rule'></span>
                        </>
                    :<>
                        <p> Your monthly repayments</p>
                        <p className="monthly-repayment">&pound;{repayment.monthly.toFixed(2)}</p>
                        <span className='hr-rule'></span>
                        <p>Total you&apos;ll repay over the term</p>
                        <p className='total-repayment'>&pound;{repayment.total.toFixed(2)}</p>
                    </>}
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