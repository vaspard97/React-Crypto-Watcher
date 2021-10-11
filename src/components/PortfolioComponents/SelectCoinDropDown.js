import React, { useContext } from "react";
import { AppContext } from "../../context/globalContext";

import Select from "react-select";

function SelectCoinDropDown({ setCoinName }) {
  const { coins } = useContext(AppContext);

  const options = coins.map((coin) => {
    return {
      value: coin.name,
      label: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={coin.image}
            alt="Icon"
            height="20px"
            width="20px"
            style={{ marginRight: "0.5rem" }}
          />
          <div>{coin.name}</div>
        </div>
      ),
    };
  });

  return (
    <Select
      options={options}
      styles={{
        menu: (provided) => ({ ...provided, zIndex: 9999 }),
      }}
      onChange={(e) => {
        setCoinName(e.value);
      }}
    />
  );
}

export default SelectCoinDropDown;
