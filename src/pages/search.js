import Coins from "@/components/Coins";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import React, { useEffect, useState } from "react";

const search = () => {
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    const getCoins = async () => {
      const res = await fetch("/api/coins");
      const allCoins = await res.json();

      setCoins(allCoins);
      setFilteredCoins(allCoins);
    };
    getCoins();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFilteredCoins(
      coins.filter((coin) =>
        coin.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  };
  return (
    <div>
      <Navbar />
      <SearchBar
        value={searchValue}
        handleChange={(e) => setSearchValue(e.target.value)}
        handleSubmit={handleSubmit}
      />
      <Coins coins={filteredCoins} />
      <Footer />
    </div>
  );
};

export default search;
