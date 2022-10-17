import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from '../../utils/prisma'
import { Memory } from "@prisma/client";

type ErrorResponse = {
    error: Object;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Memory | Memory[] | ErrorResponse>
  ) {
    if (req.method === "GET"){
        let memories:Memory[] = [];
        try {
            memories = await prisma.memory.findMany();
        } catch (error) {
            return console.log(error);
        }
        if (!memories) {
          
        }
    }

  }