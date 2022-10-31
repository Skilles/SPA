import { Router } from "express";
// This will help us connect to the database
import { getDb } from "../db/conn.js";
// This help convert the id from string to ObjectId for the _id.
import { ObjectId } from "mongodb";
 
// productRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /product.
const productRoutes = Router();
 
// This section will help you get a list of all the products.
productRoutes.route("/api/products").get(function (req, res) {
 let db_connect = getDb("products");
 db_connect
   .collection("products")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you get a single product by id
productRoutes.route("/api/product/:id").get(function (req, res) {
 let db_connect = getDb("products");
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("products")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you create a new product.
productRoutes.route("/api/product/add").post(function (req, response) {
 let db_connect = getDb("products");
 let myobj = {
   name: req.body.name
 };
 db_connect.collection("products").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 
// This section will help you update a product by id.
productRoutes.route("/api/product/:id").post(function (req, response) {
 let db_connect = getDb("products");
 let myquery = { _id: ObjectId(req.params.id) };
 let newvalues = {
   $set: {
     name: req.body.name
   },
 };
 db_connect
   .collection("products")
   .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     console.log("1 document updated");
     response.json(res);
   });
});
 
// This section will help you delete a product
productRoutes.route("/api/product/:id").delete((req, response) => {
 let db_connect = getDb("products");
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect.collection("products").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
 
export default productRoutes;