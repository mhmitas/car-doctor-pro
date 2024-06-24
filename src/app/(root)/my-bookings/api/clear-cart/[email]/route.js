import connectDB from "@/lib/connectDB"

export async function DELETE(req, { params }) {
    try {
        const db = await connectDB();
        const coll = db.collection('bookings');
        const email = params.email;
        const result = await coll.deleteMany({ userEmail: email });
        return Response.json(result);
    } catch (err) {
        console.error(err);
        return Response.json({ message: 'Service Not Deleted:', err })
    }
}