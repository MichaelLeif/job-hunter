import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "@/app/_db"

export const authOptions: NextAuthOptions = {
    adapter: DrizzleAdapter(db),
    session: {
        strategy: "jwt",
    },
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      }),
      GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID as string,
        clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      }),
    ],
    callbacks: {
      async session({ session, user, token }) {
        if (session?.user) {
          session.user.id = token.id || user?.id;
        }
        return session;
      },
      async jwt({ token, user }) {
        if (user) {
          token.id = user.id; // Add the user ID to the JWT
        }
        return token;
      },
    },
    secret: process.env.NEXTAUTH_SECRET,
  };