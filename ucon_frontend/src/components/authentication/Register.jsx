import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { post } from "../../services/api";
import { API_REGISTER } from "../../services/endpoints";
import { AuthContext } from "../../context/AuthContext";

import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  CssBaseline,
} from "@mui/material";

const Register = () => {
  const [formData, setFormData] = useState({
    user_email: "",
    user_name: "",
    password: "",
    password2: "",
  });

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await post(API_REGISTER, formData, false);
      if (response.tokens?.access && response.tokens?.refresh) {
        login({
          access: response.tokens.access,
          refresh: response.tokens.refresh,
        });
        navigate("/");
      } else {
        alert("Registration failed.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Error registering.");
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
            Register
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email"
              name="user_email"
              type="email"
              onChange={handleChange}
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
              margin="normal"
              required
              fullWidth
              label="Name"
              name="user_name"
              onChange={handleChange}
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
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              name="password"
              onChange={handleChange}
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
              margin="normal"
              required
              fullWidth
              label="Confirm Password"
              type="password"
              name="password2"
              onChange={handleChange}
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
              Register
            </Button>

            <Typography
              variant="body2"
              align="center"
              sx={{ mt: 2, color: "#bbb" }}
            >
              Already have an account?{" "}
              <Link
                to="/login"
                style={{ color: "#1976d2", textDecoration: "none" }}
              >
                Login
              </Link>
            </Typography>
          </form>
        </Paper>
      </Box>
    </>
  );
};

export default Register;
