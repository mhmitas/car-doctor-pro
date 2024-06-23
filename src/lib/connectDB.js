import { MongoClient } from "mongodb";

let db;
const connectDB = async () => {
    if (db) return;
    try {
        const uri = process.env.NEXT_PUBLIC_MONGODB_URI
        const client = new MongoClient(uri)
        db = client.db('car_doctor_pro')
        return db
    } catch (error) {
        console.error(error);
    }
};

export default connectDB;