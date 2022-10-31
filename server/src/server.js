import express, { json } from "express";
import cors from "cors";

import productRoutes from "./routes/product.js";
import authRoutes from "./routes/auth.js";
import { connectToServer } from "./db/conn.js";


const app = express();

app.use(cors());
app.use(json());
app.use(productRoutes);
app.use(authRoutes);

// get driver connection
app.listen(5000, () => {
  // perform a database connection when server starts
  connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: 5000`);
});