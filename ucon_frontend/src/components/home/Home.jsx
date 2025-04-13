import React, { useContext, useState } from "react";
import NavBar from "./NavBar";
import { AuthContext } from "../../context/AuthContext";
import Dashboard from "../userManagement/Dashboard";
import Test from "./Test";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Box,
  Divider,
  Typography,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";

const drawerWidth = 240;
const collapsedWidth = 60;

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("home"); // default to home

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case "dashboard":
        return <Dashboard />;
      case "orders":
        return <Typography variant="h5">Orders Page</Typography>;
      case "reports":
        return <Typography variant="h5">Reports Page</Typography>;
      case "home":
      default:
        return <Test />;
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      minHeight="100vh"
      sx={{ backgroundColor: "#151b25" }}
    >
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <NavBar toggleDrawer={toggleDrawer} setSelectedMenu={setSelectedMenu} />
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: isDrawerOpen ? drawerWidth : collapsedWidth,
          flexShrink: 0,
          whiteSpace: "nowrap",
          "& .MuiDrawer-paper": {
            width: isDrawerOpen ? drawerWidth : collapsedWidth,
            transition: "width 0.3s",
            overflowX: "hidden",
            boxSizing: "border-box",
            backgroundColor: "#212d40",
            border: "1px solid #212d40",
          },
        }}
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItemButton onClick={() => setSelectedMenu("dashboard")}>
            <ListItemIcon>
              <DashboardIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            {isDrawerOpen && (
              <ListItemText primary="Dashboard" sx={{ color: "#fff" }} />
            )}
          </ListItemButton>
          <ListItemButton onClick={() => setSelectedMenu("orders")}>
            <ListItemIcon>
              <ShoppingCartIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            {isDrawerOpen && (
              <ListItemText primary="Orders" sx={{ color: "#fff" }} />
            )}
          </ListItemButton>
          <ListItemButton onClick={() => setSelectedMenu("reports")}>
            <ListItemIcon>
              <BarChartIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            {isDrawerOpen && (
              <ListItemText primary="Reports" sx={{ color: "#fff" }} />
            )}
          </ListItemButton>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {renderContent()}
      </Box>
    </Box>
  );
};

export default Home;
