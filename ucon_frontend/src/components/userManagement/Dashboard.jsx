import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const Dashboard = () => {
  return (
    <Box
      sx={{
        p: 4,
        minHeight: "100vh",
        backgroundColor: "#151b25",
        color: "#ffffff",
      }}
    >
        <Typography variant="h4" gutterBottom>
          I am Dashboard
        </Typography>
        <Typography variant="body1">
          This will show the list of users in a table from the database.
        </Typography>
    </Box>
  );
};

export default Dashboard;
