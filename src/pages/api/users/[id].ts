// src/pages/api/users/[id].ts
import { NextApiRequest, NextApiResponse } from "next";
import { getUserById, updateUser, deleteUser } from "../../../utils/db";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = parseInt(req.query.id as string);

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  if (req.method === "GET") {
    const user = getUserById(id);
    return user
      ? res.status(200).json(user)
      : res.status(404).json({ message: "User not found" });
  }

  if (req.method === "PUT") {
    const { name, email } = req.body;
    const updatedUser = updateUser(id, { name, email });
    return updatedUser
      ? res.status(200).json(updatedUser)
      : res.status(404).json({ message: "User not found" });
  }

  if (req.method === "DELETE") {
    const deletedUser = deleteUser(id);
    return deletedUser
      ? res.status(200).json(deletedUser)
      : res.status(404).json({ message: "User not found" });
  }

  return res.status(405).json({ message: "Method not allowed" });
}
