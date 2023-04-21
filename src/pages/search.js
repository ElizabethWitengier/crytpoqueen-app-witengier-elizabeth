import Coins from "@/components/Coins";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import React, { useState } from "react";

const search = ({ coins }) => {
  const [filteredCoins, setFilteredCoins] = useState(coins);
  const [searchValue, setSearchValue] = useState("");

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
        text={
          "The search function is a powerful tool that can help you quickly find the information you need, including specific coins and their market trends. Click on each coin to learn more."
        }
        value={searchValue}
        handleChange={(e) => setSearchValue(e.target.value)}
        handleSubmit={handleSubmit}
      />
      {filteredCoins.length < 0 ? (
        "Loading..."
      ) : (
        <Coins coins={filteredCoins} />
      )}
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(process.env.BASE_URL + "/api/coins");
  const coins = await res.json();
  if (coins.error) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      coins,
    },
  };
}

export default search;
