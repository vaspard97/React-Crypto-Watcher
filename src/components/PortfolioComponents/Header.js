import { Typography, Box } from "@mui/material";
function Header() {
  return (
    <Box>
      <Typography variant="subtitle2" gutterBottom>
        Current Balance
      </Typography>
      <Typography variant="h5" gutterBottom>
        US$50,000.00
      </Typography>
    </Box>
  );
}

export default Header;
