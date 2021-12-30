import "./users.css";
import { DataGrid } from "@material-ui/data-grid";
import { usersRows, usersColumns } from "../../components/data";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const UserLists = () => (
  <div style={{ minWidth: "100%", height: 600 }}>
    <DataGrid
      columns={usersColumns}
      rows={usersRows}
      pageSize={100}
      disableSelectionOnClick={true}
    />
  </div>
);
export const handleDelete = (id) => {};

export const Users = () => {
  return (
    <div className="UsersList">
      <div className="UsersListBar">
        <h4 className="UsersListTitle">All Customer</h4>
        <Button className="NewUserButton">
          <Link to="/user/add">Create User</Link>
        </Button>
      </div>
      <UserLists />
    </div>
  );
};
