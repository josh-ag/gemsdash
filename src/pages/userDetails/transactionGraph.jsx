import "./userDetails.css";
import { Transactions } from "../../components/data";

export const TransactionGraph = ({ userID }) => {
  const currentUserTransactions = Transactions.filter(
    (transaction) => transaction.userId === userID
  );
  return (
    <div className="TransactionGraph">
      {currentUserTransactions && currentUserTransactions.length
        ? "This feature is not yet supported"
        : "This User Have No Graph"}
    </div>
  );
};
