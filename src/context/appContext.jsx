import { createContext, useState, useEffect } from "react";
import {
  CustomerAnalyticsData,
  CustomersData,
  LatestTransactionData,
} from "../components/data";

export const AppContext = createContext();

export const AppStateContext = (props) => {
  const [AnalyticData, setAnalyticData] = useState([]);
  const [Customers, setCustomers] = useState([]);
  const [LatestTransaction, setLatestTransaction] = useState([]);

  useEffect(() => {
    const analyticData = CustomerAnalyticsData;
    setAnalyticData(analyticData);
    return analyticData;
  }, []);

  useEffect(() => {
    const customers_data = CustomersData;
    setCustomers(customers_data);
    return customers_data;
  }, []);

  useEffect(() => {
    const transaction_data = LatestTransactionData;
    setLatestTransaction(transaction_data);
    return transaction_data;
  }, []);

  return (
    <AppContext.Provider
      {...props}
      value={{
        AnalyticData,
        Customers,
        LatestTransaction,
      }}
    />
  );
};
