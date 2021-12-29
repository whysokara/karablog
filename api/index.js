const express = require("express");
const app = express();
const dotenv = require("dotenv");

const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json());

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

app.use("/api/auth", authRoute);

const PORT = "5000";
app.listen(PORT, () => {
  console.log(`Server running on ports ${PORT}`);
});
