import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        const db = await connectDB()
        const bookingColl = db.collection('bookings')
        const email = params?.email;
        // console.log({ email })
        if (!email || email === 'undefined') {
            return NextResponse.json({ message: 'email not found' }, { status: 402 })
        }
        // get service
        const result = await bookingColl.find({ userEmail: email }).toArray()
        // console.log({result})
        return NextResponse.json(result)
    } catch (err) {
        console.error('Services not found:', err);
        return NextResponse.json([])
    }
}