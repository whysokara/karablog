const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(console.log("MongoDb Connected"))
  .catch((err) => console.log(err));

app.use("/", (req, res) => {
  console.log("This is main url");
});

const PORT = "5000";
app.listen(PORT, () => {
  console.log(`Server running on ports ${PORT}`);
});
