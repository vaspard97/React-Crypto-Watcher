import React, { useContext, useState } from "react";
import { Card, Typography, Box, TextField, Grid, Button } from "@mui/material";
import { AppContext } from "../../context/globalContext";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import SelectCoinDropDown from "./SelectCoinDropDown";
function AddAssetModal() {
  const [coinName, setCoinName] = useState("");
  const [coinQuantity, setCoinQuantity] = useState("");
  const [coinPrice, setCoinPrice] = useState("");
  const [transactionDate, setTransactionDate] = useState("");
  //  const [totalPrice, setTotalPrice] = useState(0);

  const { isModalActive, setIsModalActive, transaction, setTransaction } =
    useContext(AppContext);
  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let _id = uuidv4();
    let totalPrice = parseFloat(coinQuantity) * parseFloat(coinPrice);
    const newTransaction = [
      ...transaction,
      {
        _id: _id,
        coinName,
        coinQuantity,
        coinPrice,
        transactionDate,
        totalPrice,
      },
    ];
    setTransaction(newTransaction);
    setIsModalActive(!isModalActive);
  };

  return (
    <Box
      position="fixed"
      left="0"
      top="0"
      height="100vh"
      width="100vw"
      zIndex="9999"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box component="form" onSubmit={handleSubmit} maxWidth="xs">
        <Card sx={{ overflow: "visible" }}>
          <Grid
            container
            display="flex"
            flexDirection="column"
            padding={2}
            paddingTop={0}
            spacing={2}
          >
            <Grid item display="flex" alignItems="center">
              <Typography variant="h6" flexGrow={1}>
                Add Transaction
              </Typography>
              <ClearRoundedIcon
                onClick={() => {
                  setIsModalActive(!isModalActive);
                }}
              />
            </Grid>
            <Grid item>
              <SelectCoinDropDown setCoinName={setCoinName} />
            </Grid>

            <Grid item xs={12} display="flex">
              <Grid item xs={6} marginRight={1}>
                <TextField
                  required
                  label="Quantity"
                  size="small"
                  type="number"
                  fullWidth
                  value={coinQuantity}
                  onChange={(e) => {
                    setCoinQuantity(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  label="Price"
                  size="small"
                  type="number"
                  fullWidth
                  value={coinPrice}
                  onChange={(e) => {
                    setCoinPrice(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Grid item>
              <TextField
                required
                label="Date"
                size="small"
                type="date"
                InputLabelProps={{ shrink: true }}
                fullWidth
                value={transactionDate}
                onChange={(e) => {
                  setTransactionDate(e.target.value);
                }}
              />
            </Grid>

            <Grid item>
              <Button type="submit" variant="contained" fullWidth>
                Confirm
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Box>
  );
}

export default AddAssetModal;
