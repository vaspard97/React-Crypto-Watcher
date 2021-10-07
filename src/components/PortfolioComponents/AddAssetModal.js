import React, { useContext } from "react";
import { Card, Typography, Box, TextField, Grid, Button } from "@mui/material";
import { AppContext } from "../../context/globalContext";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import SelectCoinDropDown from "./SelectCoinDropDown";
function AddAssetModal() {
  const { isModalActive, setIsModalActive, coins } = useContext(AppContext);
  console.log(coins);
  return (
    <Box
      position="fixed"
      left="0"
      top="0"
      height="100vh"
      width="100vw"
      zIndex="9000"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <Card sx={{ width: "350px" }}>
          <Grid container padding={2} spacing={2}>
            <Grid item display="flex" flexGrow={1}>
              <Typography variant="h6">Add Transaction</Typography>
            </Grid>
            <Grid item>
              <ClearRoundedIcon
                onClick={() => {
                  setIsModalActive(!isModalActive);
                }}
              ></ClearRoundedIcon>
            </Grid>

            <Grid item xs={12}>
              <SelectCoinDropDown />
            </Grid>
            <Grid item xs={12} display="flex">
              <Grid item xs={6} marginRight={1}>
                <TextField
                  label="Quantity"
                  size="small"
                  type="number"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  label="Price"
                  size="small"
                  type="number"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <TextField size="small" type="date" fullWidth></TextField>
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Total Price"
                disabled
                value="$0"
                fullWidth
              ></TextField>
            </Grid>
            <Grid item xs="12">
              <Button
                variant="contained"
                fullWidth
                onClick={() => {
                  setIsModalActive(!isModalActive);
                }}
              >
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
