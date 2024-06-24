import connectDB from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export async function GET(request, { params }) {
    try {
        const db = await connectDB()
        const serviceColl = db.collection('services')
        const id = new ObjectId(params?._id)
        // get service
        const result = await serviceColl.findOne({ _id: id })
        // console.log({result})
        return Response.json(result)
    } catch (err) {
        console.error('Services not found:', err);
        return Response.json({ message: err?.message }, { status: 404 })
    }
}