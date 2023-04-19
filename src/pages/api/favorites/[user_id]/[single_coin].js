import { connectToDatabase } from "../../../../utils/mongodb";

export default async function handler(req, res) {
  const { user_id, single_coin } = req.query;
  const { db } = await connectToDatabase();
  switch (req.method) {
    // Add a favorite
    case "POST":
      if (!single_coin || !user_id) {
        return res
          .status(400)
          .json({ message: "Please provide coin_id and user_id" });
      }

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
      break;
    case "DELETE":
      if (!single_coin || !user_id) {
        return res
          .status(400)
          .json({ message: "Please provide coin_id and user_id" });
      }

      await db
        .collection("favorites")
        .deleteOne({ coin_id: single_coin, user_id });

      return res.status(200).json({ message: "Deleted the coin" });
    default:
      break;
  }
}
