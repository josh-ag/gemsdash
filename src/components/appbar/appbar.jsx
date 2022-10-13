import "./appbar.css";
import { NotificationsNone, Language } from "@material-ui/icons";
import { Avatar, Typography, IconButton, Box } from "@material-ui/core";
import gems from "../../static/gems.jpg";
import logo2 from "../../static/logo2.png";
import { Link } from "react-router-dom";

export const Appbar = () => (
  <Box className="Appbar">
    <Box className="AppbarWrapper">
      <Link to="/" className="Left">
        <Avatar src={logo2} alt="gems logo image" className="AppbarLogo" />
        <Typography className="AppbarTitle" style={{ marginLeft: 8 }}>
          GEMS ADMIN
        </Typography>
      </Link>
      <Box className="Right">
        <IconButton
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          size="medium"
          component={Link}
          to="/notifications"
        >
          <NotificationsNone
            style={{ color: "rgb(225, 225, 225)" }}
            fontSize="large"
          />
          <span className="NotificationBadge">2</span>
        </IconButton>

        <IconButton size="medium" component={Link} to="/languages">
          <Language style={{ color: "rgb(225, 225, 225)" }} fontSize="large" />
        </IconButton>
        <IconButton component={Link} to="/profile">
          {" "}
          <Avatar src={gems} alt="appbar image" />
        </IconButton>
      </Box>
    </Box>
  </Box>
);
