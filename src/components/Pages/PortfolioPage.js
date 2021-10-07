import React, { useContext } from "react";
import { Container } from "@mui/material";
import { AppContext } from "../../context/globalContext";
import Header from "../PortfolioComponents/Header";
import ProfitLossCard from "../PortfolioComponents/ProfitLossCard";
import AssetSection from "../PortfolioComponents/AssetSection";
import AddAssetBtn from "../PortfolioComponents/AddAssetBtn";
import AddAssetModal from "../PortfolioComponents/AddAssetModal";
function PortfolioPage() {
  const { isModalActive } = useContext(AppContext);
  return (
    <Container maxWidth="sm" sx={{ marginTop: "2rem", marginBottom: "2rem" }}>
      <>
        {isModalActive ? <AddAssetModal /> : <></>}

        <Header />
        <ProfitLossCard />
        <AssetSection />
        <AddAssetBtn />
      </>
    </Container>
  );
}

export default PortfolioPage;
