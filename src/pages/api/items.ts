import { NextApiRequest, NextApiResponse } from "next";

let items: { id: number; name: string; description: string }[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "GET": // Get all items
      res.status(200).json(items);
      break;

    case "POST": // Create a new item
      const newItem = { id: Date.now(), ...req.body };
      items.push(newItem);
      res.status(201).json(newItem);
      break;

    case "PUT": // Update an item
      const { id, name, description } = req.body;
      items = items.map((item) =>
        item.id === id ? { id, name, description } : item
      );
      res.status(200).json({ id, name, description });
      break;

    case "DELETE": // Delete an item
      const itemId = parseInt(req.query.id as string);
      items = items.filter((item) => item.id !== itemId);
      res.status(204).end();
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
