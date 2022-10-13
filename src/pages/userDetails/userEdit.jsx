import "./userDetails.css";
import {
  CloudUpload,
  AlternateEmail,
  PersonOutline,
  AccountCircleOutlined,
  PhoneOutlined,
  PublicOutlined,
  LocationOnOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Avatar,
  Backdrop,
} from "@material-ui/core";

export const UserEdit = ({ user }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [isProfileExpanded, setIsProfileExpanded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("updated");
  };

  return (
    <Box
      style={{
        flex: 2,
        marginLeft: 10,
        boxShadow: "4px 2px 10px -7px #444",
        padding: 16,
      }}
    >
      <Backdrop
        open={isProfileExpanded}
        style={{ zIndex: 500 }}
        onClick={() => setIsProfileExpanded(!isProfileExpanded)}
      >
        <img
          src={user.avatar}
          style={{ width: 300, height: 300 }}
          alt="user profile"
        />
      </Backdrop>
      <Typography variant="h6" style={{ color: "#555" }}>
        Edit Profile
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Box style={{ flex: 2 }}>
          <TextField
            fullWidth
            label="Username"
            defaultValue={user.userName}
            placeholder="username"
            name="userName"
            onChange={(e) => setUserName(e.target.value)}
            style={{ margin: "20px 0px" }}
            InputProps={{
              startAdornment: (
                <IconButton edge="start">
                  <AccountCircleOutlined fontSize="small" />
                </IconButton>
              ),
            }}
          />

          <TextField
            fullWidth
            label="Firstname"
            placeholder="Firstname"
            defaultValue={user.firstName}
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            style={{ marginBottom: 20 }}
            InputProps={{
              startAdornment: (
                <IconButton edge="start">
                  <PersonOutline fontSize="small" />
                </IconButton>
              ),
            }}
          />

          <TextField
            fullWidth
            label="Lastname"
            placeholder="Lastname"
            defaultValue={user.lastName}
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
            style={{ marginBottom: 20 }}
            InputProps={{
              startAdornment: (
                <IconButton edge="start">
                  <PersonOutline fontSize="small" />
                </IconButton>
              ),
            }}
          />
          <TextField
            fullWidth
            label="Email"
            placeholder="Email"
            type="email"
            defaultValue={user.email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: 20 }}
            InputProps={{
              startAdornment: (
                <IconButton edge="start">
                  <AlternateEmail fontSize="small" />
                </IconButton>
              ),
            }}
          />

          <TextField
            fullWidth
            label="Phone Number"
            placeholder="Phone Number"
            defaultValue={user.phone}
            type="text"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            style={{ marginBottom: 20 }}
            InputProps={{
              startAdornment: (
                <IconButton edge="start">
                  <PhoneOutlined fontSize="small" />
                </IconButton>
              ),
            }}
          />

          <TextField
            fullWidth
            label="City"
            placeholder="City"
            name="city"
            onChange={(e) => setCity(e.target.value)}
            defaultValue={user?.address?.city}
            style={{ marginBottom: 20 }}
            InputProps={{
              startAdornment: (
                <IconButton edge="start">
                  <LocationOnOutlined fontSize="small" />
                </IconButton>
              ),
            }}
          />

          <TextField
            fullWidth
            label="Country"
            placeholder="Country"
            name="country"
            defaultValue={user?.address?.country}
            onChange={(e) => setCountry(e.target.value)}
            style={{ marginBottom: 20 }}
            InputProps={{
              startAdornment: (
                <IconButton edge="start">
                  <PublicOutlined fontSize="small" />
                </IconButton>
              ),
            }}
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            style={{
              backgroundColor: "rgb(31, 107, 152)",
              color: "#fff",
            }}
          >
            Submit
          </Button>
        </Box>
        <Box
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Avatar
            src={user.avatar}
            alt="user profile"
            style={{ width: 100, height: 100 }}
            onClick={() => setIsProfileExpanded(!isProfileExpanded)}
          />

          <label htmlFor="ProfilePicture" style={{ alignSelf: "flex-end" }}>
            <CloudUpload />
          </label>
          <TextField
            type="file"
            id="ProfilePicture"
            style={{ display: "none" }}
          />
        </Box>
      </Box>
    </Box>
  );
};
