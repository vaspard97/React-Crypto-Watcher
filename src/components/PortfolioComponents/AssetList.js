import { Card, Box, Avatar, Typography } from "@mui/material";
function AssetList() {
  return (
    <Card variant="outlined">
      <Box padding={2} display="flex" alignItems="flex-start">
        <Box display="flex" alignItems="center" flexGrow={1}>
          <Avatar />
          <Box
            display="flex"
            alignItems="flex-start"
            flexDirection={"column"}
            marginLeft={1}
          >
            <Typography variant="subtitle">Bitcoin</Typography>
            <Typography variant="subtitle2">BTC</Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection={"column"}
          justifyContent="flex-start"
          marginRight={2}
        >
          <Typography variant="subtitle2">Price</Typography>
          <Typography variant="caption">US$40,000.00</Typography>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="flex-end">
          <Typography variant="subtitle2">Holdings</Typography>
          <Typography variant="caption">2 BTC</Typography>
        </Box>
      </Box>
    </Card>
  );
}

export default AssetList;
