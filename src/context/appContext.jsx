import { createContext, useState } from "react";
import { AnalyticsData, CustomersData, TransactionsData, Users } from "./data";

export const AppContext = createContext();

export const AppStateContext = (props) => {
  /*
  ============================
  APP STATE
  ============================
  */
  const [analytics, setAnalytis] = useState(AnalyticsData);
  const [customers, setCustomers] = useState(CustomersData);
  const [transactions, setTransactions] = useState(TransactionsData);
  const [users, setUsers] = useState(Users);

  return (
    <AppContext.Provider
      {...props}
      value={{
        analytics,
        customers,
        transactions,
        users,
      }}
    />
  );
};
