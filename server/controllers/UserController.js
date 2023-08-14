import User from "../models/UserModel.js";
import bcrypt from "bcrypt";

export const getUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email: email,
    });

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const saveUser = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name: name, email: email, password: hashedPassword });
  try {
    const insertUser = await user.save();
    res.status(201).json(insertUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
