import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import "./userDetails.css";

export const TransactionGraph = ({ userID }) => {
  const { transactions } = useContext(AppContext);
  const currentUserTransactions = transactions.filter(
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
