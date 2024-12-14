// src/pages/api/users/index.ts
import { NextApiRequest, NextApiResponse } from "next";
import { getUsers, addUser } from "../../../utils/db";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(getUsers());
  }

  if (req.method === "POST") {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }

    const newUser = addUser({ id: Date.now(), name, email });
    return res.status(201).json(newUser);
  }

  return res.status(405).json({ message: "Method not allowed" });
}
