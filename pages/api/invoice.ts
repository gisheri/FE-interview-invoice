import { NextApiRequest, NextApiResponse } from "next";
import { Invoice } from "../../interfaces";

export const sampleItems: Invoice = {
  id: 1,
  name: "Purchase Made in-store",
  createdAt: Date.now() - 60 * 60 * 24 * 12 * 1000,
  items: [
    { id: 1, name: "Cherries", value: 12 },
    { id: 2, name: "Chips", value: 5 },
    { id: 3, name: "Brush", value: 6 },
    { id: 4, name: "Jam", value: 3 },
    { id: 5, name: "Racecar", value: 17 },
    { id: 6, name: "Cheese", value: 8 },
    { id: 7, name: "Shrub", value: 19 },
    { id: 8, name: "Potatoes", value: 14 }
  ]
};

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(sampleItems);
};

export default handler;
