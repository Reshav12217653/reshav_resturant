import mongoose from "mongoose";

export const dbConnection = () => {
  const MONGO_URI = "mongodb+srv://reshavkkc:12345@learning.zsusa7l.mongodb.net/?retryWrites=true&w=majority&appName=learning"
  mongoose
    .connect(MONGO_URI, {
      dbName: "RESERVATIONS",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};
