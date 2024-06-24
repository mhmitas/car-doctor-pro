import connectDB from '@/lib/connectDB';
import NextAuth from 'next-auth/next';
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';
import GoogleProvider from "next-auth/providers/google";


const handler = NextAuth({
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials) {
                const { email, password } = credentials
                if (!email || !password) {
                    return null
                }
                const db = await connectDB()
                const currentUser = await db.collection('users').findOne({ email })
                if (!currentUser) {
                    return null
                }
                const passwordMatched = bcrypt.compareSync(password, currentUser?.password); // true
                console.log(passwordMatched)
                if (!passwordMatched) {
                    return null
                }
                return currentUser
            }
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async signIn({ user, account, }) {
            if (account.provider === 'google' || account.provider === 'github') {
                try {
                    const db = await connectDB()
                    const coll = db.collection('users')
                    const isExist = await coll.findOne({ email: user?.email })
                    console.log({ isExist: !!isExist })
                    if (isExist) {
                        return user
                    }
                    const newUser = {
                        name: user?.name,
                        email: user?.email,
                        image: user?.image,
                        role: 'user',
                    }
                    const result = await coll.insertOne(newUser)
                    console.log(result)
                    return user;
                } catch (err) {
                    console.error(err);
                    return null
                }
            }
            return user
        }
    },
    pages: {
        signIn: '/sign-in'
    }
})

export { handler as GET, handler as POST }