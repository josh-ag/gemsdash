import { Box } from "@material-ui/core";
import { Sidebar } from "./sidebar/sidebar";

export const Layout = (props) => {
  return (
    <Box style={{ width: "100%", display: "flex", position: "relative" }}>
      {/* sideNav */}
      <Sidebar />
      {/* page */}
      <Box style={{ flex: 1, margin: 10 }}>{props.children}</Box>
    </Box>
  );
};
