import { MongoClient } from "mongodb";

let client;
let _db;

export function connectToServer(callback) {
    if (!client) {
        client = new MongoClient(process.env.ATLAS_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
    }
    client.connect(function (err, db) {
        // Verify we got a good "db" object
        if (db) {
            _db = db.db("main");
            console.log("Successfully connected to MongoDB.");
        }
        return callback(err);
    });
}
export function getDb() {
    return _db;
}