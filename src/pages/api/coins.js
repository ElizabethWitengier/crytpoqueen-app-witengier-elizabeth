// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const responseCoins = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false"
  );
  const allCoins = await responseCoins.json();
  res.status(200).json(allCoins);
}
