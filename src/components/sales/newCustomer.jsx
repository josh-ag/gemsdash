import React, { useState, useEffect } from "react";
import "./sales.css";
import { Avatar, Box, Button, Typography } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Link } from "react-router-dom";

export const NewCustomers = ({ customer }) => {
  const [userChecked, setUserChecked] = useState();
  const [check, setCheck] = useState(false);

  useEffect(() => {
    const user_id = customer.id;
    setUserChecked(user_id);
    return user_id;
  }, [customer.id]);

  const toggleUser = () => {
    setCheck(!check);
  };

  return (
    <Box className="Member">
      <Box className="MemberLeft">
        <Avatar
          src={customer.avatar}
          alt="users image"
          style={{
            filter: check ? "blur(5px)" : "blur(0px)",
          }}
        />
        <Box
          className="LeftTitle"
          style={{
            filter: check ? "blur(5px)" : "blur(0px)",
            marginLeft: 16,
          }}
        >
          <Link to={`/user/${customer.id}`}>
            <Typography className="TitleLarge" variant="body1">
              {customer.userName}
            </Typography>
            <Typography className="TitleSmall" variant="caption">
              {customer.occupation}
            </Typography>
          </Link>
        </Box>
      </Box>
      <input
        type="checkbox"
        id={userChecked}
        style={{ display: "none" }}
        value={userChecked}
        onChange={(e) => toggleUser(e.target.value)}
        checked={check}
      />
      <Button size="small" style={{ textTransform: "capitalize" }}>
        <label
          htmlFor={userChecked}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {check ? (
            <VisibilityOff fontSize="small" className="MemberRightIcon" />
          ) : (
            <Visibility fontSize="small" className="MemberRightIcon" />
          )}

          <Typography variant="body2">{check ? "Show" : "Hide"}</Typography>
        </label>
      </Button>
    </Box>
  );
};
