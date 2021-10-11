import { useContext } from "react";
import { Card, Box, Avatar, Typography } from "@mui/material";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { AppContext } from "../../context/globalContext";

let formatCurrency = new Intl.NumberFormat("en", {
  style: "currency",
  currency: "usd",
});

function abbreviateNumber(value) {
  if (typeof value === "number") {
    let newValue = value;
    const suffixes = ["", "K", "M", "B", "T"];
    let suffixNum = 0;
    while (newValue >= 1000) {
      newValue /= 1000;
      suffixNum++;
    }

    newValue = newValue.toPrecision(3);

    newValue += suffixes[suffixNum];
    return newValue;
  } else return value;
}

function AssetList({ transactions }) {
  const { _id, coinName, coinQuantity, coinPrice, transactionDate } =
    transactions;
  const { coins, deleteTransaction, transaction } = useContext(AppContext);
  let currentCoin = coins.filter((coin) => coin.name === coinName);
  let percentageProfit =
    ((currentCoin[0].current_price - parseFloat(coinPrice)) /
      parseFloat(coinPrice)) *
    100;
  console.log(typeof coinQuantity);
  return (
    <Card variant="outlined" sx={{ padding: "10px", marginBottom: "0.5rem" }}>
      <Box display="flex" justifyContent="flex-end" paddingBottom={1}>
        <Typography variant="caption" flexGrow={1}>
          <b>Bought Date:</b> {transactionDate}
        </Typography>
        <span
          onClick={() => {
            deleteTransaction(transaction, _id);
          }}
        >
          <CancelRoundedIcon fontSize="small" />
        </span>
      </Box>
      <Box display="flex" alignItems="flex-start">
        <Box
          display="flex"
          alignItems="center"
          marginRight={1}
          flexGrow={1}
          minWidth="120px"
        >
          <Avatar alt="Logo" src={currentCoin[0].image} />
          <Box
            display="flex"
            alignItems="flex-start"
            flexDirection={"column"}
            marginLeft={1}
          >
            <Typography variant="subtitle2">{coinName}</Typography>
            <Box display="flex" alignItems="center">
              <Typography
                variant="subtitle2"
                paddingRight={1}
                sx={{ fontSize: "11px" }}
              >
                {currentCoin[0].symbol.toUpperCase()}
              </Typography>
              {percentageProfit > 0 ? (
                <Typography
                  variant="subtitle2"
                  color="green"
                  sx={{ wordBreak: "break-all", fontSize: "11px" }}
                >
                  {percentageProfit.toFixed(2)}%
                </Typography>
              ) : (
                <Typography
                  variant="subtitle2"
                  color="red"
                  sx={{ wordBreak: "break-all", fontSize: "11px" }}
                >
                  {percentageProfit.toFixed(2)}%
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection={"column"}
          justifyContent="flex-end"
          alignItems="flex-start"
          marginRight={1}
          width="90px"
        >
          <Typography variant="subtitle2">Current Price</Typography>
          <Typography variant="caption" sx={{ fontSize: "11px" }}>
            US{formatCurrency.format(currentCoin[0].current_price)}
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-end"
          width="80px"
        >
          <Typography variant="subtitle2">Holdings</Typography>
          <Typography variant="caption" sx={{ fontSize: "11px" }}>
            {abbreviateNumber(parseFloat(coinQuantity))}{" "}
            {currentCoin[0].symbol.toUpperCase()}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

export default AssetList;
