import express, { json } from 'express';

import recipeRoutes from './routes/recipe.js';
import authRoutes from './routes/auth.js';
import connect from './mongo.js';

const app = express();

app.use(json());
app.use(recipeRoutes);
app.use(authRoutes);

app.listen(process.env.PORT || 5000, () => {
  // perform a database connection when server starts
  connect(process.env.ATLAS_URI, (err) => {
    if (err) console.error(err);
  }).then(() => {
    console.log('Server started on port 5000');
  });
});
