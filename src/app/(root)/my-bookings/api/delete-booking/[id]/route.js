import connectDB from "@/lib/connectDB"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

export async function DELETE(req, { params }) {
    try {
        const db = await connectDB()
        const coll = db.collection('bookings')
        const id = params.id
        const result = await coll.deleteOne({ _id: new ObjectId(id) })
        return NextResponse.json(result)
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: 'Service Not Deleted:', err })
    }
}