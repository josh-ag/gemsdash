import "./home.css";
import { FeatureInfo } from "../../components/featureInfo/featureinfo";
import { AnalyticsComponent } from "../../components/analytics/analytics";
import { SalesCompoent } from "../../components/sales/sales";

export const HomePage = () => {
  return (
    <div className="Home">
      <FeatureInfo />
      <AnalyticsComponent />
      <SalesCompoent />
    </div>
  );
};
