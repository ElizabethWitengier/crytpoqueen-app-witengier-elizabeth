import { connectToDatabase } from "../../utils/mongodb";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  const { email, password } = JSON.parse(req.body);

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide email and password" });
  }

  const { db } = await connectToDatabase();

  const user = await db.collection("users").findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const favoritesRes = await fetch(
    process.env.BASE_URL + "/api/favorites/" + user._id
  );
  const favorites = await favoritesRes.json();

  res.status(200).json({ ...user, favorites });
}
