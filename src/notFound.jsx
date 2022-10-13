import { Typography, Box, Button } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Box
      style={{
        flex: 1,
        padding: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <>
        <Typography
          style={{
            textAlign: "center",
            color: "#555",
            fontSize: 27,
            fontWeight: 800,
          }}
        >
          Oops!
        </Typography>
        <Typography
          style={{
            textAlign: "center",
            color: "#555",
            fontSize: 18,
            fontWeight: 500,
          }}
        >
          Page Not Found
        </Typography>
      </>
      <Button
        onClick={() => navigate(-1)}
        style={{
          alignSelf: "center",
          marginTop: 45,
          backgroundColor: "rgb(31, 107, 152)",
          color: "#fff",
        }}
      >
        <ArrowBack />
        back
      </Button>
    </Box>
  );
};
