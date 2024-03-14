import {
  Grid,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  ThemeProvider,
} from "@mui/material";
import theme from "theme";
import logo from "./assets/logo2.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppRouter } from "AppRouter";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ToastContainer limit={3} />
        <Grid
          container
          style={{
            paddingLeft: 8,
            // paddingRight: 30,
            // paddingTop: 50,
            width: "100%",
          }}
        >
          <AppBar position="sticky">
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexGrow: 1,
                  width: "100%",
                  justifyContent: "flex-start",
                }}
              >
                <img
                  src={logo}
                  alt="Logo"
                  // height={150}
                  height={70}
                  style={{ width: "150px" }}
                />
                <span
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  COUNSELING SOLUTIONS AND INTERVENTIONS
                </span>
              </Typography>
            </Toolbar>
          </AppBar>
          <Grid
            sx={{
              alignItems: "flex-start",
              marginTop: 2,
            }}
            // minWidth="lg"
          >
            <AppRouter />
            {/* <Copyright /> */}
          </Grid>
        </Grid>
      </ThemeProvider>
    </Router>
  );
}
