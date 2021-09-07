const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then((x) => {
    console.log(`Connected to Mongo! Database: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to Mongo.", err);
  });
