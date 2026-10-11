import { createTheme } from "@mui/material/styles";

/**
 * Tema "grimdark" de StromRol.
 *
 * Paleta: fondo carbón cálido, superficies oscuras, texto pergamino y
 * acentos ámbar/cobre. Tipografía: Cinzel para display, Alegreya Sans
 * para el cuerpo (cargadas en index.html).
 *
 * Nota: los colores semánticos de los dados (raza/clase/nación/total)
 * se exponen además como variables CSS en App.css para los elementos
 * HTML ajenos a MUI (.dado-raza, .dado-clase, ...).
 */
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#e0a83c", // ámbar / oro
      dark: "#b8842a",
      light: "#f0c46a",
      contrastText: "#17140f",
    },
    secondary: {
      main: "#c96f3b", // cobre
      dark: "#a35527",
      light: "#e0905f",
      contrastText: "#17140f",
    },
    success: { main: "#7a9e63" }, // verde musgo
    warning: { main: "#d9903b" }, // ámbar quemado
    error: { main: "#c25b4e" }, // rojo óxido
    info: { main: "#6f9bb3" }, // acero frío
    background: {
      default: "#141210", // carbón
      paper: "#1e1a17", // superficie elevada
    },
    text: {
      primary: "#e9e0d0", // pergamino
      secondary: "#b3a68f", // pergamino apagado
    },
    divider: "rgba(233, 224, 208, 0.12)",
  },
  typography: {
    fontFamily: '"Alegreya Sans", "Segoe UI", sans-serif',
    fontSize: 16,
    h1: { fontFamily: '"Cinzel", serif', fontWeight: 900 },
    h2: { fontFamily: '"Cinzel", serif', fontWeight: 900 },
    h3: { fontFamily: '"Cinzel", serif', fontWeight: 700 },
    h4: { fontFamily: '"Cinzel", serif', fontWeight: 700 },
    h5: { fontFamily: '"Cinzel", serif', fontWeight: 700 },
    h6: { fontFamily: '"Cinzel", serif', fontWeight: 700 },
    button: {
      fontFamily: '"Cinzel", serif',
      fontWeight: 700,
      textTransform: "none",
      letterSpacing: "0.02em",
    },
    body1: { lineHeight: 1.55 },
    body2: { lineHeight: 1.5 },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          "&:hover": { boxShadow: "none" },
        },
        containedPrimary: {
          backgroundImage: "linear-gradient(180deg, #eabb55 0%, #d99a2c 100%)",
        },
        containedSecondary: {
          backgroundImage: "linear-gradient(180deg, #d97f47 0%, #bd602c 100%)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "#1e1a17",
          border: "1px solid rgba(224, 168, 60, 0.16)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          border: "1px solid rgba(233, 224, 208, 0.18)",
        },
      },
    },
    MuiTextField: {
      defaultProps: { variant: "outlined" },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0, 0, 0, 0.25)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(233, 224, 208, 0.22)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(224, 168, 60, 0.55)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderWidth: 2,
            borderColor: "#e0a83c",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: { color: "#e0a83c" },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: { minHeight: 42 },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#2a241f",
          color: "#e9e0d0",
          border: "1px solid rgba(224, 168, 60, 0.35)",
          fontSize: "0.9rem",
        },
        arrow: { color: "#2a241f" },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: { backgroundColor: "#e0a83c", height: 3 },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontFamily: '"Cinzel", serif',
          fontWeight: 700,
          minHeight: 48,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "rgba(224, 168, 60, 0.14)",
            borderLeft: "3px solid #e0a83c",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "rgba(224, 168, 60, 0.2)",
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: "#1e1a17",
          backgroundImage: "none",
          border: "1px solid rgba(224, 168, 60, 0.25)",
        },
      },
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          backgroundColor: "#2a241f",
          border: "1px solid rgba(224, 168, 60, 0.4)",
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          color: "#b3a68f",
          "&.Mui-selected": { color: "#e0a83c" },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          colorScheme: "dark",
        },
      },
    },
  },
});

export default theme;
