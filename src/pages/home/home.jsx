import { FeatureInfo } from "../../components/featureInfo/featureinfo";
import { AnalyticsComponent } from "../../components/analytics/analytics";
import { SalesComponent } from "../../components/sales/sales";

export const HomePage = () => {
  return (
    <div style={{ marginBottom: 200 }}>
      <FeatureInfo />
      <AnalyticsComponent id="analytics" />
      <SalesComponent id="sales" />
    </div>
  );
};
