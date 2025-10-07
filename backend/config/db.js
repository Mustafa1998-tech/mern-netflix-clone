import mongoose from "mongoose";
import { MongoClient, ServerApiVersion } from "mongodb";
import { ENV_VARS } from "./envVars.js";

export const connectDB = async () => {
	try {
		// Connect with Mongoose (existing approach)
		const conn = await mongoose.connect(ENV_VARS.MONGO_URI);
		console.log("MongoDB connected with Mongoose: " + conn.connection.host);
		
		// Additionally, test connection with MongoDB driver approach (from ChatGPT example)
		const client = new MongoClient(ENV_VARS.MONGO_URI, {
			serverApi: {
				version: ServerApiVersion.v1,
				strict: true,
				deprecationErrors: true,
			}
		});
		
		try {
			// Connect the client to the server
			await client.connect();
			// Send a ping to confirm a successful connection
			await client.db("admin").command({ ping: 1 });
			console.log("Pinged your deployment. You successfully connected to MongoDB!");
		} finally {
			// Ensures that the client will close when you finish/error
			await client.close();
		}
	} catch (error) {
		console.error("Error connecting to MongoDB: " + error.message);
		process.exit(1); // 1 means there was an error, 0 means success
	}
};