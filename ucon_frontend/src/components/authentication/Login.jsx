import React, { useEffect, useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { post } from "../../services/api";
import { API_LOGIN } from "../../services/endpoints";
import { AuthContext } from "../../context/AuthContext";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  CssBaseline,
} from "@mui/material";

const Login = () => {
  const [formData, setFormData] = useState({ user_email: "", password: "" });
  const { login, token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await post(API_LOGIN, formData, false);
      if (response.tokens?.access && response.tokens?.refresh) {
        login({
          access: response.tokens.access,
          refresh: response.tokens.refresh,
        });
        navigate("/");
      } else {
        alert("Invalid login credentials");
      }
    } catch (err) {
      console.error("Login Error:", err);
      alert("Login failed");
    }
  };

  return (
    <>
      <CssBaseline />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{ backgroundColor: "#151b25" }}
      >
        <Paper
          elevation={6}
          sx={{
            p: 4,
            width: 360,
            backgroundColor: "#11151c",
            color: "#ffffff",
            borderRadius: 2,
            border: "1px solid #212d40",
          }}
        >
          <Typography variant="h5" align="center" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              type="email"
              name="user_email"
              label="Email"
              onChange={handleChange}
              required
              InputLabelProps={{ style: { color: "#bbb" } }}
              InputProps={{
                style: { color: "#fff" },
              }}
              sx={{
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#212d40",
                },
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#394867",
                }
              }}
            />
            <TextField
              fullWidth
              margin="normal"
              type="password"
              name="password"
              label="Password"
              onChange={handleChange}
              required
              InputLabelProps={{ style: { color: "#bbb" } }}
              InputProps={{
                style: { color: "#fff" },
              }}
              sx={{
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#212d40",
                },
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#394867",
                }
              }}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              sx={{ mt: 2 }}
            >
              Login
            </Button>
          </form>

          <Typography
            variant="body2"
            align="center"
            sx={{ mt: 2, color: "#bbb" }}
          >
            Don't have an account?{" "}
            <Link
              to="/register"
              style={{ color: "#1976d2", textDecoration: "none" }}
            >
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default Login;
