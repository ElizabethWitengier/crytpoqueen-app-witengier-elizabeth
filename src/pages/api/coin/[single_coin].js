// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const single_coin = req.query.single_coin;
  const responseCoin = await fetch(
    "https://api.coingecko.com/api/v3/coins/" + single_coin
  );
  const coin = await responseCoin.json();
  res.status(200).json(coin);
}
