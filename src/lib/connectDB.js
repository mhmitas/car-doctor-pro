import { MongoClient, ServerApiVersion } from "mongodb";

let db;
let client;

const connectDB = async () => {
    if (db) return db;
    if (!client) {
        const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
        client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        })
    }
    try {
        await client.connect()
    } catch (error) {
        console.error(error);
    }
    db = client.db('car_doctor_pro')
    return db
};

export default connectDB;