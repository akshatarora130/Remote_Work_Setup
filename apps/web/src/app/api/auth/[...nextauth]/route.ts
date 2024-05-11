import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import {PrismaAdapter} from '@next-auth/prisma-adapter';
import {prisma} from "@repo/db";
import {GITHUB_ID, GITHUB_SECRET, GOOGLE_ID, GOOGLE_SECRET, NEXTAUTH_SECRET} from "@repo/common/src";

type SessionProps = {
    session: any;
    user: any;
}

export const authOptions = {
    adapter: PrismaAdapter(prisma),

    providers: [
        GithubProvider({
            clientId: GITHUB_ID ?? "",
            clientSecret: GITHUB_SECRET ?? "",
        }),
        GoogleProvider ({
            clientId: GOOGLE_ID ?? "",
            clientSecret: GOOGLE_SECRET ?? ""
        })
    ],

    secret: NEXTAUTH_SECRET,

    callbacks: {
        async session({ session, user } : SessionProps) {
            session.user.id = user.id;
            session.user.active = user.active
            return session;
        },
    },
}

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };