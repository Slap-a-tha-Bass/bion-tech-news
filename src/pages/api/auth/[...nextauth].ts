import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import GithubProvider from 'next-auth/providers/github';

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  session: {strategy: "jwt"},
  debug: process.env.NODE_ENV !== "production",
  secret: process.env.AUTH_SECRET,
    jwt: {
        secret: process.env.JWT_SECRET
    }
});
