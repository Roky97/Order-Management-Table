import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App/App.jsx";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { ThemeProvider } from "styled-components";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";

const colors = {
  green: {
    400: "#31C48D",
    500: "#0E9F6E",
    900: "#014737",
  },
  blue: {
    300: "#A4CAFE",
    900: "#233876",
  },
  red: {
    400: "#F98080",
    500: "#F05252",
    900: "#771D1D",
  },
  yellow: {
    400: "#fff700",
    900: "#9e8e00",
  },
  grey: {
    100: "#DADADA",
    200: "#AAAAAA",
    700: "#2D2D2D",
  },
};

export const theme = {
  colors,
  background: {
    primary: "#121212",
    secondary: "#1E1E1E",
  },
  divider: {
    primary: "#333333",
  },
  text: {
    primary: "#F5F5F5",
    secondary: "#AAAAAA",
  },
  tables: {
    orders: {
      cells: {
        status: {
          filled: {
            background: colors.green[900],
            color: colors.green[400],
          },
          new: {
            background: colors.blue[900],
            color: colors.blue[300],
          },
          rejected: {
            background: colors.red[900],
            color: colors.red[400],
          },
          cancelled: {
            background: colors.grey[700],
            color: colors.grey[400],
          },
          pending: {
            background: colors.yellow[900],
            color: colors.yellow[200],
          },
        },
        side: {
          buy: {
            color: colors.green[500],
          },
          sell: {
            color: colors.red[500],
          },
        },
      },
    },
  },
};

const muiTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MUIThemeProvider theme={muiTheme}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </MUIThemeProvider>
  </StrictMode>
);
