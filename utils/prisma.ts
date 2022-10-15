// CREATE PRIMSA INSTANCE TO BE USED TO QUERY DATABASE ACROSS ENTIRE APPLICATION
import { PrismaClient } from "@prisma/client";

// allow global `var` declarations
declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ["query"],
  });

  if (process.env.NODE_ENV !== "production") global.prisma = prisma;
