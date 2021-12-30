import "./sidebar.css";
import {
  LineStyle,
  TrendingUp,
  Timeline,
  Person,
  Storefront,
  AttachMoney,
  BarChart,
  Mail,
  DynamicFeed,
  Chat,
  Work,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export const Sidebar = () => (
  <div className="Sidebar">
    <div className="SidebarWrapper">
      <div className="SidebarMenu">
        <h3 className="SidebarTitle">Dashboard</h3>
        <ul className="SidebarList">
          <li className="SidebarItem  Active">
            <Link to="/" className="SidebarLink">
              <LineStyle fontSize="small" className="SidebarIcon" />
              Home
            </Link>
          </li>

          <li className="SidebarItem">
            <Link to="/#Analytics" className="SidebarLink">
              <Timeline fontSize="small" className="SidebarIcon" />
              Analytics
            </Link>
          </li>

          <li className="SidebarItem">
            <Link to="/#Sales" className="SidebarLink">
              <TrendingUp fontSize="small" className="SidebarIcon" />
              Sales
            </Link>
          </li>
        </ul>
        <h3 className="SidebarTitle">Quick Menu</h3>
        <ul className="SidebarList">
          <li className="SidebarItem">
            <Link to="/users" className="SidebarLink">
              <Person fontSize="small" className="SidebarIcon" />
              Users
            </Link>
          </li>
          <li className="SidebarItem">
            <Link to="/products" className="SidebarLink">
              <Storefront fontSize="small" className="SidebarIcon" />
              Products
            </Link>
          </li>
          <li className="SidebarItem">
            <Link to="/transactions" className="SidebarLink">
              <AttachMoney fontSize="small" className="SidebarIcon" />
              Transactions
            </Link>
          </li>
          <li className="SidebarItem">
            <Link to="/reports" className="SidebarLink">
              <BarChart fontSize="small" className="SidebarIcon" />
              Reports
            </Link>
          </li>
        </ul>
        <h3 className="SidebarTitle">Notification</h3>
        <ul className="SidebarList">
          <li className="SidebarItem">
            <Link to="/mails" className="SidebarLink">
              <Mail fontSize="small" className="SidebarIcon" />
              Mail
            </Link>
          </li>
          <li className="SidebarItem">
            <Link to="/messages" className="SidebarLink">
              <Chat fontSize="small" className="SidebarIcon" />
              Messages
            </Link>
          </li>
          <li className="SidebarItem">
            <Link to="/feedback" className="SidebarLink">
              <DynamicFeed fontSize="small" className="SidebarIcon" />
              Feedback
            </Link>
          </li>
        </ul>
        <h3 className="SidebarTitle">Staff</h3>
        <ul className="SidebarList">
          <li className="SidebarItem">
            <Link to="/manage" className="SidebarLink">
              <Work fontSize="small" className="SidebarIcon" />
              Manage
            </Link>
          </li>
          <li className="SidebarItem">
            <Link to="/analytics" className="SidebarLink">
              <Timeline fontSize="small" className="SidebarIcon" />
              Analytics
            </Link>
          </li>
          <li className="SidebarItem">
            <Link to="/reports" className="SidebarLink">
              <Report fontSize="small" className="SidebarIcon" />
              Reports
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
