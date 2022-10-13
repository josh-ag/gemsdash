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
import { Link, useLocation } from "react-router-dom";
import { Typography } from "@material-ui/core";

export const Sidebar = () => {
const {pathname,hash} = useLocation();


  return(
  <div className="Sidebar">
    <div className="SidebarWrapper">
      <div className="SidebarMenu">
        <h3 className="SidebarTitle">Dashboard</h3>
        <ul className="SidebarList">
          <li className="SidebarItem  Active">
            <Link to="/" className="SidebarLink" style={{backgroundColor: pathname==='/'?'rgb(31, 107, 152)':'rgb(98, 121, 134)'}}>
              <LineStyle fontSize="small" className="SidebarIcon" />
                <Typography >
              Home
              </Typography>
            </Link>
          </li>

          <li className="SidebarItem">
            <Link to="/#analytics" className="SidebarLink"style={{backgroundColor: hash==='#analytics'?'rgb(31, 107, 152)':'rgb(98, 121, 134)',}}>
              <Timeline fontSize="small" className="SidebarIcon" />
                <Typography >
              Analytics
              </Typography>
            </Link>
          </li>

          <li className="SidebarItem">
            <Link to="/#sales" className="SidebarLink"style={{backgroundColor: hash==='#sales'?'rgb(31, 107, 152)':'rgb(98, 121, 134)'}}>
              <TrendingUp fontSize="small" className="SidebarIcon" />
                <Typography >
              Sales
              </Typography>
            </Link>
          </li>
        </ul>
        <h3 className="SidebarTitle">Quick Menu</h3>
        <ul className="SidebarList">
          <li className="SidebarItem">
            <Link to="/users" className="SidebarLink"style={{backgroundColor: pathname==='/users'?'rgb(31, 107, 152)':'rgb(98, 121, 134)'}}>
              <Person fontSize="small" className="SidebarIcon" />
                <Typography >
              Users
              </Typography>
            </Link>
          </li>
          <li className="SidebarItem">
            <Link to="/products" className="SidebarLink"style={{backgroundColor: pathname==='/products'?'rgb(31, 107, 152)':'rgb(98, 121, 134)'}}>
              <Storefront fontSize="small" className="SidebarIcon" />
               <Typography >
              Products
              </Typography>
            </Link>
          </li>
          <li className="SidebarItem">
            <Link to="/transactions" className="SidebarLink"style={{backgroundColor: pathname==='/transactions'?'rgb(31, 107, 152)':'rgb(98, 121, 134)'}}>
              <AttachMoney fontSize="small" className="SidebarIcon" />
               <Typography >
              Transactions
              </Typography>
            </Link>
          </li>
          <li className="SidebarItem">
            <Link to="/reports" className="SidebarLink"style={{backgroundColor: pathname==='/reports'?'rgb(31, 107, 152)':'rgb(98, 121, 134)',}}>
              <BarChart fontSize="small" className="SidebarIcon" />
              <Typography >
              Reports
              </Typography>
            </Link>
          </li>
        </ul>
        <h3 className="SidebarTitle">Notification</h3>
        <ul className="SidebarList">
          <li className="SidebarItem">
            <Link to="/mails" className="SidebarLink"style={{backgroundColor: pathname==='/mails'?'rgb(31, 107, 152)':'rgb(98, 121, 134)'}}>
              <Mail fontSize="small" className="SidebarIcon" />
              Mail
            </Link>
          </li>
          <li className="SidebarItem">
            <Link to="/messages" className="SidebarLink"style={{backgroundColor: pathname==='/messages'?'rgb(31, 107, 152)':'rgb(98, 121, 134)'}}>
              <Chat fontSize="small" className="SidebarIcon" />
              Messages
            </Link>
          </li>
          <li className="SidebarItem">
            <Link to="/feedback" className="SidebarLink"style={{backgroundColor: pathname==='/feedback'?'rgb(31, 107, 152)':'rgb(98, 121, 134)'}}>
              <DynamicFeed fontSize="small" className="SidebarIcon" />
              Feedback
            </Link>
          </li>
        </ul>
        <h3 className="SidebarTitle">Staff</h3>
        <ul className="SidebarList">
          <li className="SidebarItem">
            <Link to="/manage" className="SidebarLink"style={{backgroundColor: pathname==='/manage'?'rgb(31, 107, 152)':'rgb(98, 121, 134)'}}>
              <Work fontSize="small" className="SidebarIcon" />
              Manage
            </Link>
          </li>
          <li className="SidebarItem">
            <Link to="/analytics" className="SidebarLink"style={{backgroundColor: pathname==='/analytics'?'rgb(31, 107, 152)':'rgb(98, 121, 134)'}}>
              <Timeline fontSize="small" className="SidebarIcon" />
              Analytics
            </Link>
          </li>
          <li className="SidebarItem">
            <Link to="/reports" className="SidebarLink"style={{backgroundColor: pathname==='/reports'?'rgb(31, 107, 152)':'rgb(98, 121, 134)'}}>
              <Report fontSize="small" className="SidebarIcon" />
              Reports
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
}