import { useContext } from "react";
import { Avatar, Box, Typography } from "@material-ui/core";
import {
  AccountCircleOutlined,
  MailOutline,
  Person,
  Phone,
  Public,
} from "@material-ui/icons";
import "./userDetails.css";
import { useParams } from "react-router-dom";
import { UserEdit } from "./userEdit";
import { CustomerTransaction } from "./customerTransactions";
import { AppContext } from "../../context/appContext";

export const UserDetails = () => {
  const { customers } = useContext(AppContext);

  const { id } = useParams();
  const isMatch = customers.filter((customer) => customer.id === parseInt(id));

  return (
    <Box style={{ flex: 1 }}>
      <Box style={{ display: "flex" }}>
        <Box style={{ flex: 1, boxShadow: "4px 2px 10px -7px #444" }}>
          <Box
            style={{
              display: "flex",
              backgroundColor: "rgb(31, 107, 152)",
              alignItems: "center",
              padding: 16,
            }}
          >
            <Avatar
              src={isMatch[0].avatar}
              alt="User Avatar"
              style={{ width: 65, height: 65 }}
            />
            <Box style={{ marginLeft: 16 }}>
              <Typography
                variant="h6"
                style={{ color: "#eee", textAlign: "center" }}
              >
                {isMatch[0].userName}
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ color: "#eee", textAlign: "center" }}
              >
                {isMatch[0].occupation}
              </Typography>
            </Box>
          </Box>
          <Box style={{ margin: "0px 20px" }}>
            <Box style={{ margin: "20px 0px" }}>
              <Typography variant="h6" style={{ color: "#555" }}>
                Firstname
              </Typography>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Person fontSize="small" color="action" />
                <Typography
                  variant="body1"
                  style={{ color: "#666", marginLeft: 8 }}
                >
                  {isMatch[0].firstName}
                </Typography>
              </Box>
            </Box>
            <Box style={{ margin: "20px 0px" }}>
              <Typography variant="h6" style={{ color: "#555" }}>
                Lastname
              </Typography>
              <Box style={{ display: "flex", alignItems: "center" }}>
                <AccountCircleOutlined color="action" fontSize="small" />
                <Typography
                  variant="body1"
                  style={{ color: "#666", marginLeft: 8 }}
                >
                  {isMatch[0].lastName}
                </Typography>
              </Box>
            </Box>

            <Box style={{ margin: "20px 0px" }}>
              <Typography variant="h6" style={{ color: "#555" }}>
                Username
              </Typography>
              <Box style={{ display: "flex", alignItems: "center" }}>
                <AccountCircleOutlined color="action" fontSize="small" />
                <Typography
                  variant="body1"
                  style={{ color: "#666", marginLeft: 8 }}
                >
                  {isMatch[0].userName}
                </Typography>
              </Box>
            </Box>
            <Box style={{ margin: "20px 0px" }}>
              <Typography variant="h6" style={{ color: "#555" }}>
                Email
              </Typography>
              <Box style={{ display: "flex", alignItems: "center" }}>
                <MailOutline color="action" fontSize="small" />
                <Typography
                  variant="body1"
                  style={{ color: "#666", marginLeft: 8 }}
                >
                  {isMatch[0].email}
                </Typography>
              </Box>
            </Box>
            <Box style={{ margin: "20px 0px" }}>
              <Typography variant="h6" style={{ color: "#555" }}>
                Phone
              </Typography>
              <Box style={{ display: "flex", alignItems: "center" }}>
                <Phone color="action" fontSize="small" />
                <Typography
                  variant="body1"
                  style={{ color: "#666", marginLeft: 8 }}
                >
                  {isMatch[0].phone}
                </Typography>
              </Box>
            </Box>
            <Box style={{ margin: "20px 0px" }}>
              <Typography variant="h6" style={{ color: "#555" }}>
                Address
              </Typography>
              <Box style={{ display: "flex", alignItems: "center" }}>
                <Public color="action" fontSize="small" />
                <Typography
                  variant="body1"
                  style={{ color: "#666", marginLeft: 8 }}
                >
                  {isMatch[0].address.city}, {`  ${isMatch[0].address.country}`}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography variant="h6" style={{ color: "#555" }}>
                Status
              </Typography>
              <Box style={{ display: "flex", alignItems: "center" }}>
                <Box
                  style={{
                    backgroundColor: isMatch[0].isActive
                      ? "rgb(2, 172, 118)"
                      : "#e4e4e4",
                    padding: 5,
                    borderRadius: 20,
                  }}
                />
                <Typography
                  variant="body1"
                  style={{ color: "#666", marginLeft: 8 }}
                >
                  {isMatch[0].isActive ? "Online" : "Offline"}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <UserEdit user={isMatch[0]} />
      </Box>

      <CustomerTransaction userID={isMatch[0].id} />
    </Box>
  );
};
