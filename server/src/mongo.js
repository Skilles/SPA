import mongoose from 'mongoose';

function connectToMongo(uri, callback) {
  async function connect() {
    mongoose.connect(uri);
    console.log(uri);
  }
  return connect()
    .catch((err) => {
      callback(err);
    });
}

export default connectToMongo;
