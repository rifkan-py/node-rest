require("dotenv").config();

const productData = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./models/products");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productData);

    console.log("data imported successful");
    process.exit();
  } catch (ex) {
    console.error("error occurd while importing data to database");
    console.log(ex);
    process.exit(1);
  }
};

importData();
