import React, { useContext } from "react";
import { Typography, Box } from "@mui/material";
import { AppContext } from "../../context/globalContext";

let formatCurrency = new Intl.NumberFormat("en", {
  style: "currency",
  currency: "usd",
});

function Header() {
  const { transaction, coins } = useContext(AppContext);

  let currentBalance = 0;
  transaction.forEach((transactions) => {
    const { coinName, coinQuantity } = transactions;
    let currentCoin = coins.filter((coin) => coin.name === coinName);
    currentBalance =
      currentBalance + parseFloat(coinQuantity) * currentCoin[0].current_price;
  });

  return (
    <Box>
      <Typography variant="subtitle2" gutterBottom>
        Current Balance
      </Typography>
      <Typography variant="h5" gutterBottom>
        US{formatCurrency.format(currentBalance)}
      </Typography>
    </Box>
  );
}

export default Header;
