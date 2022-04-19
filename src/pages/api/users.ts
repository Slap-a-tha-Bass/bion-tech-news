import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    return await createUsers(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function createUsers(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  try {
    const newEntry = await prisma.users.create({
      data: {
        name: body.firstName,
        email: body.email,
        password: body.password,
      },
    });
    return res.status(200).json(newEntry);
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error creating question", success: false });
  }
}
