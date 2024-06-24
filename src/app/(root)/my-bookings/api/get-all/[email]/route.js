import connectDB from "@/lib/connectDB";

export async function GET(request, { params }) {
    try {
        const db = await connectDB()
        const bookingColl = db.collection('bookings')
        const email = params?.email;
        console.log({ email })
        if (!email) {
            return Response.json({ message: 'email not found' }, { status: 402 })
        }
        // get service
        const result = await bookingColl.find({ userEmail: email }).toArray()
        // console.log({result})
        return Response.json(result)
    } catch (err) {
        console.error('Services not found:', err);
        return Response.json({ message: err?.message }, { status: 404 })
    }
}