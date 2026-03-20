import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "@/app/lib/db";
import User from "@/app/models/User";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      await connectDB();

      const existingUser = await User.findOne({ email: user.email });

      if (!existingUser) {
        // ✅ First time login → give 50 coins
        await User.create({
          email: user.email,
          username: user.name,
          avatar: user.image,
          spoilCoins: 50,
        });
      }

      return true;
    },
  },
});

export { handler as GET, handler as POST };