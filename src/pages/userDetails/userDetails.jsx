import { Avatar } from "@material-ui/core";
import { Mail, Phone, Public } from "@material-ui/icons";

import "./userDetails.css";
import { CustomersData } from "../../components/data";
import { useParams } from "react-router-dom";
import { UserEdit } from "./userEdit";

import { CustomerTransaction } from "./customerTransactions";

export const UserDetails = () => {
  const { id } = useParams();
  const isMatch =
    CustomersData &&
    CustomersData.filter((customer) => customer.id === parseInt(id));

  return (
    isMatch && (
      <div className="UserDetailPage">
        <div className="UserDetails">
          <div className="UserDetailsInfo">
            <div className="UserInfoAppBar">
              <Avatar src={isMatch[0].avatar} alt="User Avatar" />
              <div>
                <span className="UserInfoTitle Large">
                  {isMatch[0].userName}
                </span>
                <span className="UserInfoTitle Small">
                  {isMatch[0].occupation}
                </span>
              </div>
            </div>
            <ul className="UserDetailList">
              <h4 className="UserDetailListTitle">User Profile</h4>
              <li className="UserDetailListItem">
                <label className="UserDetailLabel">Firstname</label>
                <div>
                  <Mail className="UserDetailIcons" />
                  <span className="UserDetailText">{isMatch[0].firstName}</span>
                </div>
              </li>
              <li className="UserDetailListItem">
                <label className="UserDetailLabel">Lastname</label>
                <div>
                  <Mail className="UserDetailIcons" />
                  <span className="UserDetailText">{isMatch[0].lastName}</span>
                </div>
              </li>
              <li className="UserDetailListItem">
                <label className="UserDetailLabel">Email</label>
                <div>
                  <Mail className="UserDetailIcons" />
                  <span className="UserDetailText">{isMatch[0].email}</span>
                </div>
              </li>
              <li className="UserDetailListItem">
                <label className="UserDetailLabel">Phone</label>
                <div>
                  <Phone className="UserDetailIcons" />
                  <span className="UserDetailText">{isMatch[0].phone}</span>
                </div>
              </li>
              <li className="UserDetailListItem">
                <label className="UserDetailLabel">Address</label>
                <div>
                  <Public className="UserDetailIcons" />
                  <span className="UserDetailText">
                    {isMatch[0].address.city},{" "}
                    {`  ${isMatch[0].address.country}`}
                  </span>
                </div>
              </li>
              <li className="UserDetailListItem">
                <label className="UserDetailLabel">Active</label>
                <div>
                  <Mail className="UserDetailIcons" />
                  <span className="UserDetailText">
                    {isMatch[0].isActive ? "Yes" : "No"}
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* User Edit */}
          <UserEdit user={isMatch[0]} />
        </div>

        <CustomerTransaction userID={isMatch[0].id} />
      </div>
    )
  );
};
