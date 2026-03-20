import NextAuth from "next-auth";
import { avatars } from '../data/avatars';

// Extend the default Session interface to include custom user properties
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string;
      spoilCoins: number;
      email?: string | null;
      name?: string | null;
      image?: string | null;
      avatar?: string | null;
    };
  }
}