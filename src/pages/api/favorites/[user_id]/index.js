import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../../utils/mongodb";

export default async function handler(req, res) {
  const { user_id } = req.query;

  if (!user_id) {
    return res.status(400).json({ message: "Please provide user_id" });
  }

  const { db } = await connectToDatabase();

  const user_object_id = new ObjectId(user_id);

  const existingUser = await db
    .collection("users")
    .findOne({ _id: user_object_id });

  if (!existingUser) {
    return res
      .status(409)
      .json({ message: "User with this id does not exist" });
  }

  const favorite = await db.collection("favorites").find({ user_id }).toArray();

  if (favorite.length === 0) {
    return res.status(200).json([]);
  }

  const favoritesId = favorite.map((item) => item.coin_id);
  const result = [];
  for (let index = 0; index < favoritesId.length; index++) {
    const single_coin_id = favoritesId[index];
    const res = await fetch(
      process.env.BASE_URL + "/api/coin/" + single_coin_id
    );
    result.push(await res.json());
  }

  res.status(200).json(result);
}
