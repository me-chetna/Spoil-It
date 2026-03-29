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
    async signIn({ user }) {
      try {
        await connectDB();

        if (!user.email) return true;

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
        return true;
      }
    },

    async session({ session }) {
      try {
        await connectDB();

        if (!session.user?.email) return session;

        const dbUser = await User.findOne({
          email: session.user.email,
        });

        if (dbUser) {
          (session.user as any).id = dbUser._id.toString();
          (session.user as any).avatar = dbUser.avatar;
          (session.user as any).spoilCoins = dbUser.spoilCoins;
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