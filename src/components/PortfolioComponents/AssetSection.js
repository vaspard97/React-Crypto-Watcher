import React, { useContext } from "react";
import { Box, Typography, Divider } from "@mui/material";
import { AppContext } from "../../context/globalContext";
import AssetList from "./AssetList";
function AssetSection({ setCurrentBalance }) {
  const { transaction } = useContext(AppContext);

  return (
    <Box>
      <Box marginTop={2} marginBottom={2}>
        <Typography variant="subtitle2">Your Assets</Typography>
      </Box>
      <Divider />
      <Box marginTop={2} marginBottom={2}>
        {transaction.length > 0 ? (
          transaction.map((transactions) => (
            <AssetList
              transactions={transactions}
              setCurrentBalance={setCurrentBalance}
              key={transactions._id}
            />
          ))
        ) : (
          <Box>
            <Typography textAlign="center" variant="h6">
              You have no transactions
            </Typography>
            <Typography textAlign="center" variant="body1">
              Start Adding by clicking the button below
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default AssetSection;
