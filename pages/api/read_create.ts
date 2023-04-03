import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../utils/prisma";
import { Memory } from "@prisma/client";

type ErrorResponse = {
  error: Object;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Memory | Memory[] | ErrorResponse>
) {
  if (req.method === "GET") {
    let memories: Memory[] = [];
    try {
      memories = await prisma.memory.findMany({
        orderBy:{
          id: 'desc'
        }}
      );
    } catch (error) {
      return console.log(error);
    }
    if (!memories) {
      return res.status(404).json({ error: "No memories data found" });
    }
    // successfully response, memories data found
    res.status(200).json(memories);
  } else if (req.method === "POST") {
    const { title, memory } = req.body;
    let newMemory: Memory;
    try {
      newMemory = await prisma.memory.create({
        data: {
          title,
          memory,
        },
      });
      //new memory created successfully
      res.status(200).json(newMemory);
    } catch (error) {
      return res
        .status(400)
        .json({ error: "Unsuccesfully, new memory failed to be created" });
    }
  } else {
    return res.status(405).json({ error: "Wrong request" });
  }
}
