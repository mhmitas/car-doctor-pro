import connectDB from "@/lib/connectDB"
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";


export const POST = async (req) => {
    const user = await req.json()
    // console.log({ user })
    try {
        const db = await connectDB()
        const userColl = db.collection('users')
        // check isExist
        const isExist = await userColl.findOne({ email: user?.email })
        if (isExist) {
            return NextResponse.json({ message: 'user already exists' }, { status: 400 });
        }
        // create user
        const hashedPassword = bcrypt.hashSync(user.password, 14);
        const res = await userColl.insertOne({ ...user, password: hashedPassword })
        return NextResponse.json({ message: 'user created', res }, { status: 201 })
    } catch (err) {
        console.error({ err });
        return NextResponse.json({ message: 'something went wrong', err }, { status: 500 })
    }
}