import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import {
  LineChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Box, Typography } from "@material-ui/core";

export const AnalyticsComponent = () => {
  const { analytics } = useContext(AppContext);

  return (
    <Box
      style={{
        flex: 1,
        boxShadow: "4px 2px 10px -7px #444",
        marginTop: " 16px",
        padding: "16px",
        borderRadius: "10px",
      }}
    >
      <Typography style={{ color: "#555" }} variant="h6">
        Active Sales Analysis
      </Typography>
      <Box style={{ padding: "16px 0px" }}>
        <ResponsiveContainer width={"100%"} height={350}>
          <LineChart data={analytics}>
            <Line dataKey="sales" type="monotone" stroke="#8884d8" />
            <CartesianGrid strokeDasharray="5 5" stroke="#ddd" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};
