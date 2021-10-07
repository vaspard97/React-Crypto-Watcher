import React, { useContext, useState } from "react";
import { AppContext } from "../../context/globalContext";

import Select from "react-select";

function SelectCoinDropDown() {
  const { coins } = useContext(AppContext);
  const [trasnsaction, setTransaction] = useState([{ coinName: "" }]);

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
        console.log(e.value);
        setTransaction([...trasnsaction, { coinName: e.value }]);
      }}
    />
  );
}

export default SelectCoinDropDown;
