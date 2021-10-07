import { AppBar, Typography, Toolbar } from "@mui/material";
import { CssBaseline } from "@mui/material";

export default function Navbar() {
  return (
    <CssBaseline>
      <AppBar display="flex" position="relative" sx={{ zIndex: 9999 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Crypto Watcher
          </Typography>
        </Toolbar>
      </AppBar>
    </CssBaseline>
  );
}
