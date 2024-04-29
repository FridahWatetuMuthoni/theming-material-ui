import { LockOutlined } from "@mui/icons-material";
import {
  Typography,
  Link,
  Grid,
  CssBaseline,
  Box,
  Avatar,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Alert,
  Paper,
} from "@mui/material";
import { useState } from "react";

function Login() {
  const initialFormData = Object.freeze({
    email: "",
    password: "",
  });

  const [formData, setFormData] = useState(initialFormData);
  const [errMsg, setErrMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setErrMsg("");
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value.trim(),
    }));
  };
  const handleShowPassword = (e) => {
    console.log(e.target.value);
    setShowPassword(!showPassword);
  };
  return (
    <Paper
      component="main"
      maxWidth="sm"
      sx={{ maxWidth: "sm", margin: "0 auto", padding: "20px" }}
      variant="outlined"
      //   elevation={12}
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ margin: "10px 0" }}>
          Sign In
        </Typography>
        <Typography component="h1" variant="h5" sx={{ margin: "10px 0 0 0" }}>
          or
        </Typography>

        {errMsg && (
          <Alert severity="error" sx={{ margin: "5px 0" }}>
            {errMsg}
          </Alert>
        )}
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            onChange={handleChange}
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            id="password"
            onChange={handleChange}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="show password" color="secondary" />}
            label="show password"
            onChange={handleShowPassword}
            checked={showPassword}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" color="secondary">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/register/" color="secondary">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Paper>
  );
}

export default Login;
