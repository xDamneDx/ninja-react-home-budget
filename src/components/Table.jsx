// Components:
import ExpenseItem from "./ExpenseItem";

export default function Table({ expenses }) {

  return (
    <div className="Table">
      <table>
        <thead>
          <tr>
            {["Name", "Amount", "Date", "Budget", ""].map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <ExpenseItem expense={expense} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
