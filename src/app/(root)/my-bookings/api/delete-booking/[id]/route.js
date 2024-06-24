import connectDB from "@/lib/connectDB"
import { ObjectId } from "mongodb"

export async function DELETE(req, { params }) {
    try {
        const db = await connectDB()
        const coll = db.collection('bookings')
        const id = params.id
        const result = await coll.deleteOne({ _id: new ObjectId(id) })
        return Response.json(result)
    } catch (err) {
        console.error(err);
        return Response.json({ message: 'Service Not Deleted:', err })
    }
}