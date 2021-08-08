require("dotenv").config();
const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const app = express();

const connectDB = require("./config/db");

connectDB();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products/", productRoutes);

app.listen(PORT, () => {
  console.log(`server is listening on port http://localhost:${PORT}`);
});
