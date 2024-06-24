import connectDB from "@/lib/connectDB";

export async function GET() {
    try {
        const db = await connectDB()
        const serviceColl = db.collection('services')
        const result = await serviceColl.find().toArray()
        // console.log(result)
        return Response.json(result)
    } catch (err) {
        console.error('Services not found:', err);
    }
}