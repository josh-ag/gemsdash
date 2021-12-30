import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./featureinfo.css";

export const FeatureInfo = () => {
  return (
    <div className="FeatureInfo">
      <div className="FeatureItem">
        <span className="FeatureDescription">Revenue</span>
        <div className="MoneyContainer">
          <span className="FeatureMoney">$25500</span>
          <span className="FeatureMoneyRate">
            44.3
            <ArrowUpward fontSize="small" />
          </span>
        </div>
        <span className="FeatureTitle">Compare to last month</span>
      </div>

      <div className="FeatureItem">
        <span className="FeatureDescription">Sales</span>
        <div className="MoneyContainer">
          <span className="FeatureMoney">$33400</span>
          <span className="FeatureMoneyRate">
            +2.3
            <ArrowUpward fontSize="small" />
          </span>
        </div>
        <span className="FeatureTitle">Compare to last month</span>
      </div>
      <div className="FeatureItem">
        <span className="FeatureDescription">Costs</span>
        <div className="MoneyContainer">
          <span className="FeatureMoney">$13200</span>
          <span className="FeatureMoneyRate Negative">
            -12.44
            <ArrowDownward fontSize="small" />
          </span>
        </div>
        <span className="FeatureTitle">Compare to last month</span>
      </div>
    </div>
  );
};
