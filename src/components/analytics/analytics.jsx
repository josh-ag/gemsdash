import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import "./analytics.css";
import {
  LineChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export const AnalyticsComponent = () => {
  const { AnalyticData } = useContext(AppContext);

  return (
    <div className="Analytics">
      <div className="AnalyticsWrapper">
        <h4 className="Analyticstitle">Active Sales Analysis</h4>
        <div className="Chart">
          <LineChart
            data={AnalyticData}
            width={1000}
            height={300}
            margin={{ top: 10, left: 20 }}
          >
            <Line dataKey="sales" type="monotone" stroke="#8884d8" />
            <CartesianGrid strokeDasharray="5 5" stroke="#ddd" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
      </div>
    </div>
  );
};
