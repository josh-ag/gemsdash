import { useContext } from "react";
import "./sales.css";
import { Avatar, Typography, Box, Button } from "@material-ui/core";
import { NewCustomers } from "./newCustomer";
import { DataGrid } from "@material-ui/data-grid";
import { AppContext } from "../../context/appContext";

const CustomersTransactions = ({ rows, customers }) => {
  const Columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "customer",
      headerName: "CUSTOMER",
      width: 200,
      renderCell: (params) => {
        const isMatch = customers.filter(
          (cust) => cust.id === params.row.userId
        );

        return (
          <Box
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar src={isMatch[0].avatar} />
            <Typography style={{ marginLeft: "16px" }} variant="subtitle1">
              {isMatch[0].userName}
            </Typography>
          </Box>
        );
      },
    },

    {
      field: "transaction",
      headerName: "AMOUNT",
      width: 150,
      renderCell: (params) => (
        <Typography variant="subtitle1">{params.row.transaction}</Typography>
      ),
    },
    {
      field: "status",
      headerName: "STATUS",
      width: 150,
      renderCell: (params) => (
        <Typography
          style={{
            color:
              params.row.status === "Pending"
                ? "rgb(186, 72, 72)"
                : "rgb(2, 172, 118)",
          }}
        >
          {params.row.status}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "DATE",
      width: 150,
      renderCell: (params) => (
        <Typography variant="subtitle1">{params.row.date}</Typography>
      ),
    },
    {
      field: "action",
      headerName: "ACTION",
      width: 150,
      renderCell: (params) => {
        return (
          <Button
            size="small"
            variant="contained"
            style={{ backgroundColor: "rgb(4, 118, 163)", color: "#ddd" }}
            disableElevation
          >
            preview
          </Button>
        );
      },
    },
  ];

  return (
    <Box style={{ width: "100%", height: "100%", paddingTop: 16 }}>
      <DataGrid
        columns={Columns}
        rows={rows}
        autoHeight={true}
        autoPageSize={true}
        checkboxSelection={true}
        disableSelectionOnClick
        // loading={true}
      />
    </Box>
  );
};

export const SalesComponent = () => {
  const { customers, transactions } = useContext(AppContext);

  return (
    <Box className="Sales">
      <Box className="NewMembers">
        <Typography className="NewMemberTitle" variant="h6">
          Newly Join Members
        </Typography>
        <Box style={{ paddingTop: 16 }}>
          {customers &&
            customers
              .filter((customer) => customer.id <= 6)
              .map((customer) => (
                <NewCustomers customer={customer} key={customer.id} />
              ))}
        </Box>
      </Box>

      <Box className="Transactions">
        <Typography className="TransactionsTitle" variant="h6">
          Latest Transactions
        </Typography>
        <CustomersTransactions rows={transactions} customers={customers} />
      </Box>
    </Box>
  );
};
