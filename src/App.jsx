import { CssBaseline, Paper, ThemeProvider, createTheme } from "@mui/material";
import Example from "./components/Example";
import { red } from "@mui/material/colors";
import { ModeNight, WbSunny } from "@mui/icons-material";
import { useState } from "react";
import Login from "./components/Login";

function App() {
  const [mode, setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
      customRed: {
        main: red[400],
        dark: red[800],
        light: red[100],
      },
    },
    typography: {
      myVariant: {
        fontSize: "5rem",
        color: "red",
      },
      h3: {
        fontSize: "7rem",
      },
    },
  });

  const handleMode = () => {
    let new_mode = mode === "dark" ? "light" : "dark";
    setMode(new_mode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper sx={{ p: 5, maxWidth: "lg", margin: "auto" }}>
        <span onClick={handleMode}>
          {mode === "dark" ? <WbSunny /> : <ModeNight />}
        </span>
        <Login />
        <Example />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
