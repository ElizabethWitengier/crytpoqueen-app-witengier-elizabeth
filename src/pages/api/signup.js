import { connectToDatabase } from "../../utils/mongodb";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  const { name, email, password } = JSON.parse(req.body);
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide name, email, and password" });
  }

  const { db } = await connectToDatabase();

  const existingUser = await db.collection("users").findOne({ email });

  if (existingUser) {
    return res
      .status(409)
      .json({ message: "User with this email already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await db.collection("users").insertOne({
    name,
    email,
    password: hashedPassword,
  });

  // Create a session token or cookie and return it to the client...

  res.status(201).json(user);
}
