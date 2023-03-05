import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
const username = process.env.USERNAME;
const key = process.env.DBKEY;
const URL = `mongodb+srv://${username}:${key}@cluster0.w95hgqm.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(URL)