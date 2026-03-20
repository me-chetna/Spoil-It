import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "@/app/lib/db";
import User from "@/app/models/User";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {

    // 🔥 Runs on login
    async signIn({ user }) {
      try {
        await connectDB();

        const existingUser = await User.findOne({ email: user.email });

        if (!existingUser) {
          await User.create({
            email: user.email,
            name: user.name,
            image: user.image,
            avatar: null,
            spoilCoins: 50,
          });
        }

        return true;

      } catch (error) {
        console.log("❌ signIn error:", error);
        return false;
      }
    },

    // 🔥 Runs on every session fetch
    async session({ session }) {
      try {
        await connectDB();

        const dbUser = await User.findOne({
          email: session.user.email,
        });

        if (dbUser) {
          session.user.avatar = dbUser.avatar;
          session.user.spoilCoins = dbUser.spoilCoins;
        }

        return session;

      } catch (error) {
        console.log("❌ session error:", error);
        return session;
      }
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };