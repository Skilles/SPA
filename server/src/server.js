import * as dotenv from 'dotenv';
import express, { json } from 'express';

import recipeRoutes from './routes/recipe.js';
import authRoutes from './routes/auth.js';
import connect from './mongo.js';

let config = dotenv.config();

if (config.error) {
  throw config.error;
} else {
  config = config.parsed;
}

const app = express();

app.use(json());
app.use(recipeRoutes);
app.use(authRoutes);

app.listen(5000, () => {
  // perform a database connection when server starts
  connect(config.ATLAS_URI, (err) => {
    if (err) console.error(err);
  }).then(() => {
    console.log('Server started on port 5000');
  });
});
