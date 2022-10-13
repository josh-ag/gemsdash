import { useState } from "react";
import "./userDetails.css";
import { BarChart, ListAltOutlined } from "@material-ui/icons";
import { TransactionList } from "./transactionList";
import { TransactionGraph } from "./transactionGraph";

const Context = ({ ctx, userID }) => {
  switch (ctx) {
    case "transactionGraph":
      return <TransactionGraph userID={userID} />;
    case "transactionDetail":
      return <TransactionList userID={userID} />;
    default:
      return <TransactionList userID={userID} />;
  }
};

export const CustomerTransaction = ({ userID }) => {
  const [content, setContent] = useState();

  return (
    <div className="CustomerTransaction">
      <div className="TransactionTitle">Transactions</div>

      <div className="TransactionData">
        <div className="TransactionDataHeader">
          <input
            type="radio"
            name="customerTransaction"
            id="transactionDetail"
            value="transactionDetail"
            style={{ visibility: "hidden" }}
            onChange={(e) => setContent(e.target.value)}
          />
          <label htmlFor="transactionDetail">
            <ListAltOutlined />
          </label>

          <input
            type="radio"
            name="customerTransaction"
            id="transactionGraph"
            value="transactionGraph"
            style={{ visibility: "hidden" }}
            onChange={(e) => setContent(e.target.value)}
          />
          <label htmlFor="transactionGraph">
            <BarChart />
          </label>
        </div>
        <Context ctx={content} userID={userID} />
      </div>
    </div>
  );
};
