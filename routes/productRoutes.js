const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
} = require("../controller/productController");
//api/products
// get all products in database
router.get("/", getAllProducts);

//api/products
// get single pr
router.get("/:id", getProductById);

//api/products
//update item by id
//router.put('/:id', (req, res) => {

//})

//api/products
//delete item by id
//router.get('/:id', (req, res) => {

//})

//router.post('/', (req, res) => {

//})

module.exports = router;
