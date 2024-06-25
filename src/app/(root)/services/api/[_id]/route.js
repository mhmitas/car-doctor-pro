import connectDB from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        const db = await connectDB()
        const serviceColl = db.collection('services')
        const id = new ObjectId(params?._id)
        // get service
        const result = await serviceColl.findOne({ _id: id })
        // console.log({result})
        return NextResponse.json(result)
    } catch (err) {
        console.error('Services not found:', err);
        return NextResponse.json({ message: err?.message }, { status: 404 })
    }
}