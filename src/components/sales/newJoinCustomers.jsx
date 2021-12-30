import React, { useState, useEffect } from "react";
import "./sales.css";
import { Avatar } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Link } from "react-router-dom";

export const NewJoinCustomers = ({ customer }) => {
  const [userChecked, setUserChecked] = useState();
  const [check, setCheck] = useState(false);
  useEffect(() => {
    const user_id = customer.id;
    setUserChecked(user_id);
    return user_id;
  }, [customer.id]);
  const toggleUser = (param) => {
    setCheck(!check);
  };

  return (
    <div className="Member">
      <div className="MemberLeft">
        <Avatar
          src={customer.avatar}
          alt="users image"
          style={{
            filter: check ? "blur(5px)" : "blur(0px)",
          }}
        />
        <div
          className="LeftTitle"
          style={{
            filter: check ? "blur(5px)" : "blur(0px)",
          }}
        >
          <Link to={`/user/${customer.id}`}>
            <span className="TitleLarge">{customer.userName}</span>
            <div className="TitleSmall">{customer.occupation}</div>
          </Link>
        </div>
      </div>
      <input
        type="checkbox"
        id={userChecked}
        style={{ display: "none" }}
        value={userChecked}
        onChange={(e) => toggleUser(e.target.value)}
        checked={check}
      />
      <label htmlFor={userChecked} className="MemberRight">
        {check ? (
          <VisibilityOff fontSize="small" className="MemberRightIcon" />
        ) : (
          <Visibility fontSize="small" className="MemberRightIcon" />
        )}

        <span className="RightTitle">Displays</span>
      </label>
    </div>
  );
};
