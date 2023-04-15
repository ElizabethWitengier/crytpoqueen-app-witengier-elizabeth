import { connectToDatabase } from "../../../../utils/mongodb";

export default async function handler(req, res) {
  // Add a favorite
  const { user_id, single_coin } = req.query;

  if (!single_coin || !user_id) {
    return res
      .status(400)
      .json({ message: "Please provide coin_id and user_id" });
  }

  const { db } = await connectToDatabase();

  const existingFavorite = await db
    .collection("favorites")
    .findOne({ user_id, coin_id: single_coin });
  if (existingFavorite) {
    return res.status(409).json({ message: "Already Saved this coin" });
  }
  const favorite = await db.collection("favorites").insertOne({
    coin_id: single_coin,
    user_id,
  });

  res.status(200).json(favorite);
}
