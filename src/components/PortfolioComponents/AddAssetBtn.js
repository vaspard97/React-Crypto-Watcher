import React, { useContext } from "react";
import { Button, Typography } from "@mui/material";
import { AppContext } from "../../context/globalContext";

function AddAssetBtn() {
  const { isModalActive, setIsModalActive } = useContext(AppContext);
  return (
    <>
      <Button
        fullWidth
        variant="contained"
        onClick={() => {
          setIsModalActive(!isModalActive);
        }}
      >
        <Typography>Add New Asset</Typography>
      </Button>
    </>
  );
}

export default AddAssetBtn;
