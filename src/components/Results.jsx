import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

export default function Results({ userInput }) {
  const resultsData = calculateInvestmentResults(userInput);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;
  console.log(resultsData);
  return (
    <table id="result">
      <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest(Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
      <tbody>
        {resultsData.map((data) => {
          const totalInterest =
            data.valueEndOfYear -
            data.annualInvestment * data.year -
            initialInvestment;

          const totalAmountInvested = data.valueEndOfYear - totalInterest;
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
