import "./userDetails.css";
import { Transactions } from "../../components/data";

export const TransactionList = ({ userID }) => {
  const currentUserTransactions = Transactions.filter(
    (transaction) => transaction.userId === userID
  );
  return (
    <div className="TransactionList">
      {currentUserTransactions && currentUserTransactions.length
        ? currentUserTransactions.map((transaction) => (
            <ul key={transaction.id} className="TransactionCard">
              <li>
                <span className="TextLarge">Amount: </span>
                {transaction.transaction}
              </li>
              <li>
                <span className="TextLarge">Transaction Date:</span>{" "}
                {transaction.date}
              </li>
              <li>
                <span className="TextLarge">Status: </span>
                {transaction.status}
              </li>
            </ul>
          ))
        : "No Record Was Found For This User"}
    </div>
  );
};
