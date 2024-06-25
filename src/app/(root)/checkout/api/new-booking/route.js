import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";
// import { ObjectId } from "mongodb";

export async function POST(request) {
    try {
        const db = await connectDB()
        const bookingColl = db.collection('bookings')
        const bookingData = await request.json();
        const result = await bookingColl.insertOne(bookingData)
        return NextResponse.json(result)
    } catch (err) {
        console.error('something went wrong:', err);
        return NextResponse.json({ message: 'something went wrong', err }, { status: 400 })
    }
}