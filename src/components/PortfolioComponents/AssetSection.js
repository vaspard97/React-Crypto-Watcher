import { Box, Typography, Divider } from "@mui/material";
import AssetList from "./AssetList";
function AssetSection() {
  return (
    <Box>
      <Box marginTop={2} marginBottom={2}>
        <Typography>Your Assets</Typography>
      </Box>
      <Divider />
      <Box marginTop={2} marginBottom={2}>
        <AssetList />
      </Box>
    </Box>
  );
}

export default AssetSection;
