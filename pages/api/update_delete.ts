import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../utils/prisma";
import { Memory } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<
    Memory | Memory[] | { error: Object } | { message: Object }
  >
) {
  const { method } = req;
  const { id, memory, title } = req.body;

  switch (method) {
    case "PUT":
      try {
        const memoryToBeEdited: Memory = await prisma.memory.update({
          where: {
            id,
          },
          data: {
            title: memory.slice(0, memory.length),
            memory,
          },
        });
        res.status(200).json(memoryToBeEdited);
      } catch (error) {
        console.error("Update Request error: ", error);
      }
      break;
      case "DELETE":
        try {
            const memoryToBeDeleted: Memory = await prisma.memory.delete({
                where: {id},
            });
            res.status(200).json({message: 'Memory successfully deleted'});
        } catch (error) {
            
        }
  }
}
