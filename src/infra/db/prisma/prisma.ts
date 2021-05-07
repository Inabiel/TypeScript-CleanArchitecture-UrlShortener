import { PrismaClient } from "@prisma/client";

const Client = new PrismaClient({
  log: ["query", "warn"],
});

export { Client };
