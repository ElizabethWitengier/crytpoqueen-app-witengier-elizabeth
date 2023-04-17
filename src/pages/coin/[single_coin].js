import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const SingleCoin = () => {
  const [coin, setCoin] = useState(null);
  const router = useRouter();
  const { single_coin } = router.query;

  useEffect(() => {
    const getCoin = async () => {
      const res = await fetch("/api/coin/" + single_coin);
      const singleCoin = await res.json();
      if (singleCoin.error) {
        setCoin(null);
      } else {
        setCoin(singleCoin);
      }
    };
    getCoin();
  }, [single_coin]);

  if (!coin) {
    return "Cannot find coin with id of " + single_coin;
  }
  return <div>{single_coin}</div>;
};

export default SingleCoin;
