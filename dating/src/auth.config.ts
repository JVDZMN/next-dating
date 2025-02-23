import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth";
import { LoginSchema, loginSchema } from "./lib/schemas/loginSchema";
import { getUserByEmail } from "./app/actions/authAction";
import { compare } from "bcryptjs";

export default {
    providers: [Credentials({
        name: 'credentials',
        async authorize (creds) {
            const validated = loginSchema.safeParse(creds)
            if (validated.success) {
                const { email, password } = validated.data;
                const user = await getUserByEmail(email);
                if (!user || !(await compare(password, user.passwordHash))) return null;

                return user;
            } else {
                return null;
            }
        }
    })],
    
} satisfies NextAuthConfig   
