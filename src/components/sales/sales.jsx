import { useContext } from "react";
import "./sales.css";
import { Avatar } from "@material-ui/core";
import { NewJoinCustomers } from "./newJoinCustomers";
import { DataGrid } from "@material-ui/data-grid";
import { AppContext } from "../../context/appContext";

const LatestCustomersTransactions = ({ rows, customers }) => {
  const Columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "customer",
      headerName: "Customers",
      width: 200,
      renderCell: (params) => {
        const isMatch = customers.filter(
          (cust) => cust.id === params.row.userId
        );

        return (
          <div className="TransactionCustomerCell">
            <Avatar src={isMatch[0].avatar} />
            <span
              className="TransactionCutomersName"
              style={{ marginLeft: "5px" }}
            >
              {isMatch[0].userName}
            </span>
          </div>
        );
      },
    },
    { field: "date", headerName: "Date", width: 150 },
    { field: "transaction", headerName: "Amount", width: 150 },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => (
        <span className={params.row.status}>{params.row.status}</span>
      ),
    },
  ];

  return (
    <div style={{ width: "100%", height: 300 }}>
      <DataGrid
        columns={Columns}
        rows={rows}
        pageSize={20}
        disableSelectionOnClick
      />
    </div>
  );
};

export const SalesCompoent = () => {
  const { Customers, LatestTransaction } = useContext(AppContext);

  return (
    <div className="Sales">
      <div className="NewMembers">
        <h4 className="NewMemberTitle">New Join Members</h4>
        {Customers &&
          Customers.filter((customer) => customer.id <= 5).map((customer) => (
            <NewJoinCustomers customer={customer} key={customer.id} />
          ))}
      </div>

      <div className="Transactions">
        <h4 className="TransactionsTitle">Latest Transactions</h4>
        <LatestCustomersTransactions
          rows={LatestTransaction}
          customers={Customers}
        />
      </div>
    </div>
  );
};
