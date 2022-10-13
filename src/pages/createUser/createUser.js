import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  IconButton,
  Typography,
} from "@material-ui/core";
import {
  PersonOutline,
  PhoneOutlined,
  LocationOnOutlined,
  PublicOutlined,
  AccountCircleOutlined,
  AlternateEmail,
  SecurityOutlined,
  RemoveRedEye,
  VisibilityOff,
} from "@material-ui/icons";

export const CreateUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [agreement, setAgreement] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const myData = {
      firstName,
      lastName,
      userName,
      email,
      phone,
      address: { city, country },
      gender,
      agreement,
    };
  };

  return (
    <Box style={{ boxShadow: "4px 2px 10px -7px #444", padding: 16 }}>
      <Typography variant="h6" style={{ color: "#555" }}>
        Add New User
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        style={{ padding: 20 }}
      >
        <TextField
          fullWidth
          label="Username"
          value={userName}
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
          value={firstName}
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
          value={lastName}
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
          value={email}
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
          value={phone}
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
          value={city}
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
          value={country}
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
        <TextField
          fullWidth
          label="Password"
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: 20 }}
          InputProps={{
            startAdornment: (
              <IconButton edge="start">
                <SecurityOutlined fontSize="small" />
              </IconButton>
            ),
            endAdornment: (
              <IconButton
                edge="start"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <RemoveRedEye /> : <VisibilityOff />}
              </IconButton>
            ),
          }}
        />

        <Box>
          <input
            type="radio"
            name="gender"
            value="M"
            id="M"
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="M">M</label>
          <input
            onChange={(e) => setGender(e.target.value)}
            type="radio"
            name="gender"
            value="F"
            id="F"
          />
          <label htmlFor="F">F</label>
          <input
            onChange={(e) => setGender(e.target.value)}
            type="radio"
            name="gender"
            value="Other"
            id="Others"
          />
          <label htmlFor="Others">Other</label>
        </Box>

        <Box>
          <input
            onChange={(e) => setAgreement(e.target.checked)}
            type="checkbox"
            id="agreement"
            name="agreement"
          />
          <label htmlFor="agreement">
            By click on this box, you agree to accept our privacy terms and
            conditions.
          </label>
        </Box>
        <Button
          fullWidth
          type="submit"
          variant="contained"
          style={{
            backgroundColor: "rgb(31, 107, 152)",
            color: "#fff",
            marginTop: 16,
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};
