import "./appbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import gems from "../../static/gems.jpg";
import logo2 from "../../static/logo2.png";
import { Link } from "react-router-dom";

export const Appbar = () => (
  <div className="Appbar">
    <div className="AppbarWrapper">
      <Link to="/" className="Left">
        <Avatar src={logo2} alt="gems logo image" className="AppbarLogo" />
        <span className="AppbarTitle">GEMS ADMIN</span>
      </Link>
      <div className="Right">
        <div className="AppbarIcons">
          <span className="AppbarIcon AppbarIconNotification">
            <NotificationsNone />
            <span className="NotificationBadge">2</span>
          </span>

          <span className="AppbarIcon">
            <Language />
          </span>
          <span className="AppbarIcon">
            <Settings />
          </span>
        </div>
        <Avatar src={gems} alt="appbar image" className="AppbarImage" />
      </div>
    </div>
  </div>
);
