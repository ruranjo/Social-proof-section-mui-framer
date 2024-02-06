import { createTheme } from "@mui/material";
import { white } from "../../styles/variables";

 const theme = createTheme({
    palette: {
      background: {
        default: white, // Color de fondo personalizado
      },
    },
});

export default theme;