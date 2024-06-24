import connectDB from "@/lib/connectDB";
// import { ObjectId } from "mongodb";

export async function POST(request) {
    try {
        const db = await connectDB()
        const bookingColl = db.collection('bookings')
        const bookingData = await request.json();
        const result = await bookingColl.insertOne(bookingData)
        return Response.json(result)
    } catch (err) {
        console.error('something went wrong:', err);
        return Response.json({ message: 'something went wrong', err }, { status: 400 })
    }
}