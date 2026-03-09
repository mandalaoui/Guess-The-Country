const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI;

if (!uri) {
  throw new Error("MONGO_URI is missing. Make sure your .env file exists and dotenv is loaded.");
}

const client = new MongoClient(uri);

let db;

async function connectDB() {
  if (!db) {
    await client.connect();
    db = client.db("guess-the-country");
  }
  return db;
}

module.exports = connectDB;