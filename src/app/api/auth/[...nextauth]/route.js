import connectDB from '@/lib/connectDB';
import NextAuth from 'next-auth/next';
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';
import GoogleProvider from "next-auth/providers/google";


export const authOption = {
    secret: '3079073facb015af4d20b6bc7400867641dd00aa22445c456691422cf352c55118483ec73e80f4898e8279603029a820b10309ca240ced3a927b85252128100c',
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
}

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }