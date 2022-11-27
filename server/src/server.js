import * as dotenv from 'dotenv';
import express, { json } from 'express';

import recipeRoutes from './routes/recipe.js';
import authRoutes from './routes/user.js';
import connect from './mongo.js';

let config = dotenv.config();

if (config.error) {
  throw new Error("Cannot find a .env file in the root directory");
}

const app = express();

app.use(json());
app.use(recipeRoutes);
app.use(authRoutes);

app.listen(5000, () => {
  // perform a database connection when server starts
  connect(process.env.ATLAS_URI, (err) => {
    if (err) console.error(err);
  }).then(() => {
    console.log('Server started on port 5000');
  });
});
