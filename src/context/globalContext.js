import React, { useState } from "react";

//create context
const AppContext = React.createContext();

//provider component
const AppProvider = ({ children }) => {
  const [coins, setCoins] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [isModalActive, setIsModalActive] = useState(false);
  const [transaction, setTransaction] = useState([]);

  const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=60&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`;

  const getCoin = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setCoins(data);
  };

  const addTransaction = () => {
    console.log("transaction added");
  };

  const deleteTransaction = (state, _id) => {
    let newState = state.filter((item) => {
      return item._id !== _id;
    });
    setTransaction(newState);
  };

  return (
    <AppContext.Provider
      value={{
        coins,
        setCoins,
        getCoin,
        watchlist,
        setWatchlist,
        isModalActive,
        setIsModalActive,
        transaction,
        setTransaction,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
