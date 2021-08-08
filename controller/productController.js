const Product = require("../models/products");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (ex) {
    console.error(ex);
    res.status(500).json({ massage: "error occurd on server try agine later" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (ex) {
    console.error(ex);
    res.status(500).json({ massage: "error occurd on server try agine later" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};
