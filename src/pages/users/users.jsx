import { DataGrid } from "@material-ui/data-grid";
import { Avatar, Box, Button, IconButton, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { AddOutlined, Delete } from "@material-ui/icons";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";

const RenderUserList = () => {
  const handleDelete = (id) => {
    alert(`Are you sure to delete the recored ${id}`);
  };

  const { users } = useContext(AppContext);

  const renderColumn = [
    // { field: "id", headerName: "ID", width: 50 },
    {
      field: "userName",
      headerName: "USER",
      width: 200,
      renderCell: (params) => {
        return (
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Avatar src={params.row.avatar} />
            <Typography style={{ marginLeft: 16 }}>
              {params.row.userName}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "email",
      headerName: "EMAIL",
      width: 200,
      renderCell: (params) => (
        <Typography>
          <a
            href={`mailto:${params.row.email}`}
            target="_blank"
            rel="noreferrer"
          >
            {params.row.email}
          </a>
        </Typography>
      ),
    },
    {
      field: "transaction",
      headerName: "TRANSACTION",
      width: 150,
      renderCell: (params) => (
        <Typography style={{ textAlign: "center", width: "100%" }}>
          {params.row.transaction}
        </Typography>
      ),
    },

    {
      field: "status",
      headerName: "STATUS",
      width: 150,
      renderCell: (params) => {
        return (
          <Typography
            style={{
              textAlign: "center",
              textTransform: "capitalize",
              width: "100%",
              fontWeight: 400,
              color:
                params.row.status === "Pending"
                  ? "rgb(186, 72, 72)"
                  : "rgb(2, 172, 118)",
            }}
          >
            {params.row.status}
          </Typography>
        );
      },
    },
    {
      field: "action",
      headerName: "ACTIONS",
      width: 200,
      renderCell: (params) => (
        <Box
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            component={Link}
            to={`/user/${params.row.id}`}
            variant="contained"
            style={{
              textTransform: "capitalize",
              backgroundColor: "rgb(4, 118, 163)",
              color: "#ddd",
            }}
            size="small"
          >
            Edit
          </Button>
          <IconButton onClick={() => handleDelete(params.row.id)} disableRipple>
            <Delete style={{ color: "rgb(226, 72, 72)" }} />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <Box>
      <DataGrid
        columns={renderColumn}
        rows={users}
        autoHeight={true}
        autoPageSize={true}
        checkboxSelection={true}
        disableSelectionOnClick
      />
    </Box>
  );
};

export const Users = () => {
  return (
    <Box style={{ flex: 1 }}>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 32px",
        }}
      >
        <Typography variant="h6" style={{ color: "#555" }}>
          All Users
        </Typography>
        <Button
          component={Link}
          to="/user/add"
          style={{
            backgroundColor: "rgb(4, 118, 163)",
            color: "#fff",
            textTransform: "capitalize",
          }}
        >
          <AddOutlined />
          Create User
        </Button>
      </Box>
      <RenderUserList />
    </Box>
  );
};
