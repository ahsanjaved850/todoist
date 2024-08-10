import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e44332",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "#e44332",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#e44332",
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#e44332",
          "&:hover": {
            backgroundColor: "#d03a2a",
          },
        },
      },
    },
  },
});

export default theme;
