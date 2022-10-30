import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../utils/prisma";
import { Memory } from "@prisma/client";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Memory | Memory[] | {error: Object} | {message: Object} >
  ) {
    const {method} = req;
    const { id, memory, title} = req.body;

    switch(method){
        case "PUT":
            try {
                const memoryToBeEdited:Memory = await prisma.memory.update({
                    
                })
            } catch (error) {
                
            }

    }
  }