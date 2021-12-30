import "./userDetails.css";
import { CloudUpload } from "@material-ui/icons";
import { useState } from "react";

export const UserEdit = ({ user }) => {
  const [userUpdate, setUserUpdate] = useState({});

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserUpdate({
      firstName,
      lastName,
      userName,
      email,
      phone,
      address: { city, country },
    });
  };

  return (
    user && (
      <div className="UserDetailsUpdate">
        <h4 className="UserUpdateTitle">Edit Profile</h4>
        <div className="UserUpdateWrapper">
          <form
            style={{ display: "block", width: "100%" }}
            onSubmit={handleSubmit}
          >
            <div className="UserDetailsUpdateForm">
              <div className="UserDetailsUpdateLeft">
                <div className="InputElement">
                  <label htmlFor="userName" className="UserUpdateLabel">
                    Username
                  </label>
                  <input
                    defaultValue={user.userName}
                    className="TextInput"
                    type="text"
                    name="userName"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="InputElement">
                  <label className="UserUpdateLabel">Firstname</label>
                  <input
                    className="TextInput"
                    defaultValue={user.firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    name="firstName"
                  />
                </div>
                <div className="InputElement">
                  <label className="UserUpdateLabel">Lastname</label>
                  <input
                    className="TextInput"
                    type="text"
                    defaultValue={user.lastName}
                    name="lastName"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="InputElement">
                  <label className="UserUpdateLabel">Email</label>
                  <input
                    className="TextInput"
                    type="email"
                    defaultValue={user.email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="InputElement">
                  <label className="UserUpdateLabel">Phone</label>
                  <input
                    className="TextInput"
                    defaultValue={user.phone}
                    type="text"
                    name="phone"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="InputElement">
                  <label className="UserUpdateLabel">City</label>
                  <input
                    className="TextInput"
                    type="text"
                    name="city"
                    onChange={(e) => setCity(e.target.value)}
                    defaultValue={user?.address?.city}
                  />
                </div>
                <div className="InputElement">
                  <label className="UserUpdateLabel">Country</label>
                  <input
                    className="TextInput"
                    type="text"
                    name="country"
                    defaultValue={user?.address?.country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
              </div>
              <div className="UserDetailsUpdateRight">
                <img
                  src={user.avatar}
                  alt="user profile"
                  className="UserUpdateProfilePicture"
                />
                <label htmlFor="UserDp">
                  <CloudUpload />
                </label>
                <input type="file" id="UserDp" style={{ display: "none" }} />
              </div>
            </div>
            <div className="UserUpdateSubmit">
              <input
                type="submit"
                name="Update"
                className="UserUpdateSubmitButton"
              />
            </div>
          </form>
        </div>
      </div>
    )
  );
};
