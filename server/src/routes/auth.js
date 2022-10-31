import { Router } from "express";
// This will help us connect to the database
import { getDb } from "../db/conn.js";
// This help convert the id from string to ObjectId for the _id.
import { ObjectId } from "mongodb";
 
// authRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /user.
const authRoutes = Router();
 
// This section will help you get a list of all the users.
authRoutes.route("/api/users").get(function (req, res) {
 let db_connect = getDb("users");
 db_connect
   .collection("users")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you get a single user by id
authRoutes.route("/api/user/:id").get(function (req, res) {
 let db_connect = getDb("users");
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("users")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you create a new user.
authRoutes.route("/api/user/add").post(function (req, response) {
 let db_connect = getDb("users");
 let myobj = {
   name: req.body.name
 };
 db_connect.collection("users").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 
// This section will help you update a user by id.
authRoutes.route("/api/user/:id").post(function (req, response) {
 let db_connect = getDb("users");
 let myquery = { _id: ObjectId(req.params.id) };
 let newvalues = {
   $set: {
     name: req.body.name
   },
 };
 db_connect
   .collection("users")
   .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     console.log("1 document updated");
     response.json(res);
   });
});
 
// This section will help you delete a user
authRoutes.route("/api/user/:id").delete((req, response) => {
 let db_connect = getDb("users");
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect.collection("users").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
 
export default authRoutes;