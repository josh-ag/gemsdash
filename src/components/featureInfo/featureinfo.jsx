import { Typography, Box } from "@material-ui/core";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./featureinfo.css";

export const FeatureInfo = () => {
  return (
    <Box className="FeatureInfo">
      <Box className="FeatureItem">
        <Typography className="FeatureDescription" variant="h6">
          Revenue
        </Typography>
        <Box
          className="MoneyContainer"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "16px 0px",
          }}
        >
          <Typography className="FeatureMoney" variant="h4">
            $75500
          </Typography>
          <Typography className="FeatureMoneyRate">
            +44.3%
            <ArrowUpward fontSize="small" />
          </Typography>
        </Box>
        <Typography
          className="FeatureTitle"
          variant="body1"
          style={{ width: "100%", textAlign: "center" }}
        >
          Compare to last month
        </Typography>
      </Box>

      <Box className="FeatureItem">
        <Typography className="FeatureDescription" variant="h6">
          Sales
        </Typography>
        <Box
          className="MoneyContainer"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "16px 0px",
          }}
        >
          <Typography className="FeatureMoney" variant="h4">
            $33400
          </Typography>
          <Typography className="FeatureMoneyRate" variant="button">
            +2.3%
            <ArrowUpward fontSize="small" />
          </Typography>
        </Box>
        <Typography
          className="FeatureTitle"
          variant="body1"
          style={{ width: "100%", textAlign: "center" }}
        >
          Compare to last month
        </Typography>
      </Box>

      <Box className="FeatureItem">
        <Typography className="FeatureDescription" variant="h6">
          Costs
        </Typography>
        <Box
          className="MoneyContainer"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "16px 0px",
          }}
        >
          <Typography className="FeatureMoney" variant="h4">
            $13200
          </Typography>
          <Typography className="FeatureMoneyRate Negative">
            -12.44%
            <ArrowDownward fontSize="small" />
          </Typography>
        </Box>
        <Typography
          className="FeatureTitle"
          variant="body1"
          style={{ width: "100%", textAlign: "center" }}
        >
          Compare to last month
        </Typography>
      </Box>
    </Box>
  );
};
