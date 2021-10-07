import { Card, Typography, Box } from "@mui/material";
function ProfitLossCard() {
  return (
    <Card variant="outlined">
      <Box display="flex" p={2}>
        <Box display="flex" flexGrow={1}>
          <Typography>Total Profit/Loss</Typography>
        </Box>
        <Box>
          <Typography>US$4.00 </Typography>
        </Box>
      </Box>
    </Card>
  );
}
export default ProfitLossCard;
