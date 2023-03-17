//TYPESCRIPT

// import { PrismaClient } from "@prisma/client";

// declare global {
//     namespace globalThis{
//         var prismadb: PrismaClient
//     }
// }

// JAVASCRIPT


const { PrismaClient } = require("@prisma/client");

global.prismadb = new PrismaClient();