import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = ({ toggleDrawer, setSelectedMenu }) => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      logout();
      navigate("/login");
    }
  };

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{ width: "100%",  backgroundColor: "#2c374b"  }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* MyApp now acts like a drawer item */}
          <Typography
            variant="h6"
            component="div"
            onClick={() => setSelectedMenu("home")}
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "inherit",
              cursor: "pointer",
            }}
          >
            MyApp
          </Typography>

          {!isAuthenticated ? (
            <>
              <Button color="inherit"  sx={{border: "1px solid rgb(158, 178, 215)", mr:1}} component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" sx={{border: "1px solid rgb(158, 178, 215)",}} component={Link} to="/register">
                Register
              </Button>
            </>
          ) : (
            <Button color="inherit" sx={{border: "1px solid rgb(158, 178, 215)",}} onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
