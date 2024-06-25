import connectDB from "@/lib/connectDB"
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
    try {
        const db = await connectDB();
        const coll = db.collection('bookings');
        const email = params.email;
        const result = await coll.deleteMany({ userEmail: email });
        return NextResponse.json(result);
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: 'Service Not Deleted:', err })
    }
}