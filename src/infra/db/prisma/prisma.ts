import { PrismaClient } from "@prisma/client";

const client = new PrismaClient({
  log: ["query", "warn"],
});

export { client };
