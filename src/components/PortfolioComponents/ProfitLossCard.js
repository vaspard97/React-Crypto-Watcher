import { useContext } from "react";
import { Card, Typography, Box } from "@mui/material";
import { AppContext } from "../../context/globalContext";

let formatCurrency = new Intl.NumberFormat("en", {
  style: "currency",
  currency: "usd",
});

function ProfitLossCard() {
  const { coins, transaction } = useContext(AppContext);
  let totalProfitLoss = 0;
  let currentTotal = 0;
  transaction.forEach((transactions) => {
    const { coinName, totalPrice, coinQuantity } = transactions;
    let currentCoin = coins.filter((coin) => coin.name === coinName);
    currentTotal = parseFloat(coinQuantity) * currentCoin[0].current_price;
    totalProfitLoss = totalProfitLoss + currentTotal - totalPrice;
  });
  return (
    <Card variant="outlined">
      <Box display="flex" p={2}>
        <Box display="flex" flexGrow={1}>
          <Typography>Total Profit/Loss</Typography>
        </Box>
        <Box>
          {totalProfitLoss >= 0 ? (
            <Typography color="green">
              <b>{`${formatCurrency.format(totalProfitLoss)}`} </b>
            </Typography>
          ) : (
            <Typography color="red">
              <b>{`${formatCurrency.format(totalProfitLoss)}`} </b>
            </Typography>
          )}
        </Box>
      </Box>
    </Card>
  );
}
export default ProfitLossCard;
